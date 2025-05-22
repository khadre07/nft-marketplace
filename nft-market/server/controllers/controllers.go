package controllers

import (
	"context"
	"log"
	"net/http"
	"nft/databases"
	"nft/models"
	"nft/tokens"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var UserCollection *mongo.Collection = databases.UserData(databases.Client, "NftUser")
var NftCollection *mongo.Collection = databases.NftData(databases.Client, "NftInfo")

func HashPaswword() {

}

func VerifyPassword() {

}

func SignUp() gin.HandlerFunc {
	return func(c *gin.Context) {
		var ctx, cancel = context.WithTimeout(context.Background(), 10*time.Second)

		defer cancel()

		var userInfo models.NftUser
		if err := c.BindJSON(&userInfo); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"title":   err.Error(),
				"Message": `error biding ${err.Error}`})
			return
		}
		count, err := UserCollection.CountDocuments(ctx, bson.M{"email": userInfo.Email})

		if err != nil {
			log.Panic(err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})

			return
		}
		if count > 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "email already exist"})
			return

		}

		count, err = UserCollection.CountDocuments(ctx, bson.M{"username": userInfo.Username})

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		if count > 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "username already exist"})
			return
		}

		userInfo.Created_At, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))
		userInfo.UpdatedAt, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

		userInfo.ID = primitive.NewObjectID()
		userInfo.User_ID = userInfo.ID.Hex()

		userInfo.Token, userInfo.Refresh_Token, _ = tokens.TokenGenerator(*userInfo.Username, *userInfo.Email, userInfo.User_ID)
		userInfo.Collections = make([]models.NftProduct, 0)

		_, insertErr := UserCollection.InsertOne(ctx, userInfo)

		if insertErr != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "user did not created"})
			return
		}
		defer cancel()

		c.JSON(http.StatusCreated, "Successfully signed")

	}

}

func Login() gin.HandlerFunc {
	return func(c *gin.Context) {
		var ctx, cancel = context.WithTimeout(context.Background(), 10*time.Second)

		var userInfo models.NftUser
		defer cancel()
		if err := c.BindJSON(&userInfo); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"title":   "Bind json error",
				"Message": err.Error(),
			})
			return
		}

		var founduser *models.NftUser

		err := UserCollection.FindOne(ctx, bson.M{"email": userInfo.Email}).Decode(&founduser)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"title":   "Internal server error",
				"Message": "Login or Password incorrect",
			})
		}

		token, refreshToken, _ := tokens.TokenGenerator(*founduser.Username, *userInfo.Email, userInfo.User_ID)

		tokens.UpdateAllTokens(token, refreshToken, founduser.User_ID)

		//	fmt.Println(token, "token login")

		c.SetCookie("token", token, 3000, "/", "localhost", false, true)
		tok, _ := c.Cookie("token")
		log.Println(tok, "toc toc")
		c.JSON(200, gin.H{"message": "Login successful"})

		c.JSON(http.StatusFound, founduser)

	}

}

func Authenticated() gin.HandlerFunc {
	return func(c *gin.Context) {
		token, err := c.Cookie("token")
		if err != nil {
			log.Println("No token in request")
			c.JSON(http.StatusUnauthorized, gin.H{"error": "No token provided"})
			c.Abort()
			return
		}

		log.Println("Token received:", token)

		var ctx, cancel = context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		var user models.NftUser
		err = UserCollection.FindOne(ctx, bson.M{"token": token}).Decode(&user)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}

		c.Set("user", user)
		c.JSON(http.StatusAccepted, user)
		c.Next()
	}
}

func LogOut() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.SetCookie("token", "", -1, "/", "localhost", false, true)

		c.JSON(http.StatusOK, gin.H{"message": "logout successfully"})

	}
}

func IsAuthentificated() gin.HandlerFunc {
	return  func(c *gin.Context) {
		token, err := c.Cookie("token")
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"isAuthentificated": false})
			return
		}

		var ctx, cancel = context.WithTimeout(context.Background(), 10 * time.Second)

		defer cancel()

		var user models.NftUser

		err = UserCollection.FindOne(ctx, bson.M{"token": token}).Decode(&user)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"isAuthentificated": false})
			return
		}

		c.JSON(http.StatusAccepted, gin.H{"isAuthentifixared": true})
	}
}


package tokens

import (
	"context"
	"fmt"
	"log"
	"nft/databases"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var UserData *mongo.Collection = databases.UserData(databases.Client, "NftUser")
var SECRET_KEY = os.Getenv("SECRET_KEY")

type ClaimsDetails struct {
	Username string
	Email    string
	Uid      string
	jwt.StandardClaims
}

func TokenGenerator(username, email, uid string) (string, string, error) {
	claims := &ClaimsDetails{
		Username: username,
		Email:    email,
		Uid:      uid,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * time.Duration(1)).Unix(),
		},
	}
	refreshClaims := &ClaimsDetails{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * time.Duration(168)).Unix(),
		},
	}

	tokens, err := jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString([]byte(SECRET_KEY))
	fmt.Println(tokens, "tokens")

	if err != nil {
		return "", "", err
	}
	refreshtoken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshClaims).SignedString([]byte(SECRET_KEY))

	if err != nil {
		return "", "", err
	}
	return tokens, refreshtoken, nil

}

func ValidateToken(token string) (claims *ClaimsDetails, msg string) {

	parseToken, err := jwt.ParseWithClaims(token, &ClaimsDetails{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(SECRET_KEY), nil
	})

	if err != nil {
		msg = err.Error()
		return
	}
	claims, ok := parseToken.Claims.(*ClaimsDetails)

	if !ok {
		msg = "the token is invalid"
		return
	}
	if claims.ExpiresAt < time.Now().Local().Unix() {
		msg = "Token expiré"
		return nil, msg
	}
	return claims, ""

}

func UpdateAllTokens(token string, refreshtoken string, userid string) {
	var ctx, cancel = context.WithTimeout(context.Background(), time.Second*10)

	var updatebj bson.D

	updatebj = append(updatebj, bson.E{Key: "token", Value: token})

	updatebj = append(updatebj, bson.E{Key: "refresh_token", Value: refreshtoken})

	updated_at, _ := time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

	updatebj = append(updatebj, bson.E{Key: "update_at", Value: updated_at})

	// updatebj = bson.D{
	// 	{Key: "token", Value: token},
	// 	{Key: "refresh_token", Value: refreshtoken},
	// 	{Key: "updated_at", Value: updated_at},
	// }

	upsert := true

	filter := bson.M{"user_id": userid}

	opt := options.UpdateOptions{
		Upsert: &upsert,
	}
	_, err := UserData.UpdateOne(ctx, filter, bson.D{
		{Key: "$set", Value: updatebj},
	}, &opt)

	defer cancel()
	if err != nil {
		log.Println("Erreur lors de la mise à jour des tokens:", err)
		return
	}

}

package main

import (
	"net/http"
	"nft/controllers"

	"github.com/gin-gonic/gin"
)

func main() {
	// port := os.Getenv("PORT")

	// if port == "" {
	// 	port = "5000"

	// }

	router := gin.New()
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusOK)
			return
		}
		c.Next()
	})
	router.GET("/api/protected", func(c *gin.Context) {
		token, err := c.Cookie("token")
		if err != nil {
			c.JSON(401, gin.H{"error": "Utilisateur non authentifié"})
			return
		}

		c.JSON(200, gin.H{"message": "Accès autorisé", "token": token})
	})

	router.Use(gin.Logger())
	router.POST("/api/register", controllers.SignUp())
	router.POST("/api/login", controllers.Login())
	router.GET("/api/userInfo", controllers.Authenticated())
	router.GET("/api/isConnected", controllers.IsAuthentificated())
	router.POST("/api/logout", controllers.LogOut())

	router.Run(":5000")

}

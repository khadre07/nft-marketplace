package databases

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)


func Dbset() *mongo.Client {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb+srv://1234567890:1234567890@cluster0.ezvtztl.mongodb.net/"))

	if err != nil {
		log.Fatal(err)
	}
    
	ctx, cancel := context.WithTimeout(context.Background(), 10 * time.Second)
     
    defer cancel()

	err = client.Connect(ctx)

	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Println("failed to connect db")
		return nil
	}

	fmt.Println("Successfully connceted to mongodb")

	return client



}

var Client = Dbset()

func UserData(client *mongo.Client, collectionName string) *mongo.Collection {
	var collection *mongo.Collection = client.Database("NFTMarketplace").Collection(collectionName) 
     return collection
}

func NftData(client *mongo.Client, collectionName string)  *mongo.Collection {
	return client.Database("NFTMarketplace").Collection(collectionName)

}
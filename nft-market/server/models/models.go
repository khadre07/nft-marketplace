package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type NftUser struct {
	ID            primitive.ObjectID `json:"_id" bson:"_id"`
	User_ID       string             `json:"user_id"`
	Username      *string            `json:"username" validate:"required, min=3, max=15"`
	Password      *string            `json:"password" validate:"required,min=8,max=8"`
	Email         *string            `json:"email" validate:"required,email"`
	SolanaWallet  *string            `json:"SolanaWallet" validate:"required,min=32,max=44"`
	Token         string             `json:"token"`
	Refresh_Token string             `json:"refresh_token"`
	Created_At    time.Time          `json:"created_at"`
	UpdatedAt     time.Time          `json:"updated_at" bson:"updated_at"` // Date de mise à jour
	Collections   []NftProduct
}

type NftProduct struct {
	IDNFT       primitive.ObjectID `bson:"_id"`
	Nft_id      *string            `json:"nft_id" bson:"nft_id" validate:"required,min=32,max=44"`
	Nft_Name    *string            `json:"nft_name" bson:"nft_name" validate:"required,min=5"`
	Description *string            `json:"description,omitempty" bson:"description,omitempty"` // Description du NFT, peut être vide
	ImageUrl    *string            `json:"image_url,omitempty" bson:"image_url,omitempty"`     // URL de l'image
	Price       *float64           `json:"price,omitempty" bson:"price,omitempty"`             // Prix du NFT
	Owner       NftUser            `json:"owner,omitempty" bson:"owner,omitempty"`             // Propriétaire actuel
	CreatedAt   time.Time          `json:"created_at" bson:"created_at"`                       // Date de création
	UpdatedAt   time.Time          `json:"updated_at" bson:"updated_at"`                       // Date de mise à jour

}

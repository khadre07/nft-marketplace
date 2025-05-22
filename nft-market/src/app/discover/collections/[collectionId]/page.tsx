"use client"

import Navbar from "@/app/components/Navbar"
import Image from "next/image"
import ShinyText from "@/app/components/shiny"
import  '@/app/components/style.module.scss'
import Footer from "@/app/components/Footer"
import ConnectButton from "@/app/components/ButtonConnection"
import { FC, useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';




const Explore =  (

  
   {params} : {params:{collectionId:string}}

) => {

  
    const result = COLECTION.filter((nft) => nft.id === parseInt(params.collectionId))[0]
    const { publicKey, connected } = useWallet();
    const [balance, setBalance] = useState<number | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
  
    // Connexion Solana
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
  
    // Vérifier le solde quand le wallet est connecté
    useEffect(() => {
      const checkBalance = async () => {
        if (connected && publicKey) {
          try {
            const solBalance = await connection.getBalance(publicKey);
            setBalance(solBalance / LAMPORTS_PER_SOL);
            setWalletAddress(publicKey.toString());
          } catch (error) {
            console.error('Erreur lors de la récupération du solde:', error);
            setBalance(null);
          }
        } else {
          setBalance(null);
          setWalletAddress(null);
        }
      };
  
      checkBalance();
    }, [connected, publicKey]);
  
    const handleWalletConnected = (address: string) => {
      console.log(`Wallet connecté: ${address}`);
      setWalletAddress(address);
      // Les autres données seront mises à jour par l'useEffect
    }
   
    return (
        <div className="mb-4 ">
          <Navbar/>
          <div className="w-full h-[250px] z-index-5 mb-6 mt-12 p-4 ml-12"
                style={{ backgroundImage: "url(https://static.nft.chaingpt.org/images/shopgrid.svg)" }}
                >

                  <div className="flex items-center flex-cols justify-center mt-[2rem] mb-[2rem]">
                    <div className="flex aligns-item">
                       
                          <div className="flex flex-col">
                          <div className="flex items-center justify-center">
                          <h1 className="relative left-[170] top-14 text-6xl font-bold">
                          <ShinyText speedInMs={3000} className="w-fit">
                            {result.owner}
      
                          </ShinyText>
                          </h1>
                           <svg viewBox="0 0 220 45" focusable="false" className="line-height-[1em] w-90 h-[5rem] fill-none inset m-auto overflow-hidden relative left-[-115] top-[64]"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.16506V7.00827e-06L178 0V1.16505L8 1.16506Z" fill="url(#paint0_radial_726_12326)"></path><path d="M8 38.835V40H178V38.835H8Z" fill="url(#paint1_radial_726_12326)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M178 38.835V40H8V38.835H178Z" fill="url(#paint2_radial_726_12326)"></path><path fill-rule="evenodd" clipRule="evenodd" d="M1.61058 7.02776L7.24647 1.56255C7.26386 1.54569 7.28062 1.52932 7.29687 1.51345C7.52596 1.2897 7.6536 1.16506 8 1.16506V7.00827e-06C7.59859 7.00827e-06 7.28678 0.0901296 7 0.258854C6.79456 0.379724 6.60198 0.540928 6.39852 0.738226L0.76263 6.20343C0.274359 6.67691 0 7.31945 0 7.98947V10.3883H1.19993V7.98947C1.19993 7.62869 1.34766 7.28271 1.61058 7.02776Z" fill="url(#paint3_radial_726_12326)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.7959H1.19993V37.4755C1.19993 38.2262 1.8267 38.8347 2.59985 38.8347L8 38.835V40L2.59985 39.9998C1.16399 39.9998 0 38.8696 0 37.4755V16.7959Z" fill="url(#paint4_radial_726_12326)"></path><path d="M183.599 0C185.026 0 186.183 1.13016 186.183 2.52427V32.0105C186.183 32.6806 185.91 33.3231 185.425 33.7966L179.825 39.2618C179.341 39.7345 178.685 40 178 40V38.835C178.369 38.835 178.722 38.692 178.983 38.4374L184.582 32.9722C184.844 32.7173 184.99 32.3713 184.99 32.0105V2.52427C184.99 1.77359 184.368 1.16505 183.599 1.16505H178V0H183.599Z" fill="url(#paint5_radial_726_12326)"></path><defs><radialGradient id="paint0_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint1_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint2_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint3_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint4_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint5_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient></defs></svg>
                          </div>
                          <p className="flex mt-16 items-center justify-center text-vargray p-4">See all nfts powered by {result.owner}</p>
                          </div>
                    </div>
                  </div>

                </div>
               
                <div className="absolute top-0 rounded-t-lg right-0 bg-black z-10"></div>
                
<div className="flex flex-rows sm:flex-row justify-evenly">


              <Image
                  src={result.image} 
                  alt="" 
                  height={194}
                  width={400}
                  className="block-inline sm:ml-40 border-0 border-solid box-border break-words w-[602.4] h-[602.4] object-cover border border-vargray rounded-lg"
                //  style={{clipPath: "polygon(50% 0%, 89% 0, 100% 0, 100% 91%, 90% 100%, 50% 100%, 18% 100%, 0 100%, 0 10%, 14% 0)" }}
                >
                  
              </Image>
              

              <div className="animate-border inline-block border border-or bg-white bg-gradient-to-r from-black via-black-500 to-vargray bg-[length:400%_400%] flex flex-col items-center ml-18 relative left-[-79]  rounded-xl w-[600] shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
                <h2 className="font-sans sm:text-4xl font-bold leading-14 tracking-tight mr-18 mt-4">{result.name}</h2>
                <h2 className="font-sans sm:text-4xl w-[210] font-bold leading-14 tracking-tight mr-18 break-words">{result.desc}</h2>

                <div className="flex justify-between mt-1 relative top-[99]">
                  <div className="w-[512] h-[119] border border-vargray bg-black rounded-3xl">
                  <div className="flex items-center justify-center absolute left-[194] top-[-29]">
                    
       
        <ConnectButton 
          text="Connect to Buy" 
          onWalletConnected={handleWalletConnected}
        />
                          
                           
                  </div>
                          
                      <div className="flex items-start relative left-[39]">
                     <div className="flex justify-between">
                     <div className="relative left-[30] top-[40] mx-6 my-0 border-l border-gray-300"></div>

                      <p className="relative left-[15] top-[40] mr-1 text-teal font-bold text-or">{result.price} SOL</p>
                      <p className=" absolute top-[40] ml-1">Price</p>
                     </div>
                      </div>
                  </div>
                </div>

              </div>
</div>
             
<h1>
      </h1>
      <Footer/>
    
        </div>
    )
  }

const COLECTION = [
    {
      image: "/nft.webp",
      isNew: true,
      name: "NFTRULES",
      id: 19,
      collection: "nft-rule",
      price: "23",
      owner: 'jackson',
      type: "car",
      multiplier: "X10",
      volume: 0,
      desc: "The Crypto You (Baby) - Bitcoin Holder... ",
      symbol: 'rew'
     
    },
    {
      image: "/solana.avif",
     
      name: "Boots",
      id: 8,
       collection: "solana",
       price: "0.23",
        owner: 'jaarule',
        type: "car",
        multiplier: "X10",
        volume: 0,
        symbol: "SDC",
         desc: "a nft art incredible"
    },
    {
      image: "/ethereum.avif",
     
      name: "Sneaker",
      id: 38,
       collection: "ethereum",
       price: "0.73",
        owner: 'Niggas',
        type: "car",
        multiplier: "X10",
        volume: 0,
        symbol: "SDC",
         desc: "a other bit"
    },
    {
        image: "/ethereum.avif",
       
        name: "Sneaker",
        id: 74,
         collection: "ethereum",
         price: "0.73BNB",
          owner: 'Crypthoo',
          type: "car",
          multiplier: "X10",
          volume: 0,
          symbol: "SDC",
           desc: "etheurem sold a million once"
      },
      {
        image: "/solana.avif",
       
        name: "Boots",
        id: 8,
         collection: "solana",
         price: "0.23",
          owner: 'jaarule',
          type: "car",
          multiplier: "X10",
          volume: 0,
          symbol: "SDC",
           desc: "a nft art incredible"
      },
      {
        image: "/solana.avif",
       
        name: "Boots",
        id: 8,
         collection: "solana",
         price: "0.23",
          owner: 'jaarule',
          type: "car",
          multiplier: "X10",
          volume: 0,
          symbol: "SDC",
           desc: "a nft art incredible"
      },
      {
        image: "/solana.avif",
       
        name: "Boots",
        id: 8,
         collection: "solana",
         price: "0.23",
          owner: 'jaarule',
          type: "car",
          multiplier: "X10",
          volume: 0,
          symbol: "SDC",
           desc: "a nft art incredible"
      },
      {
        image: "/solana.avif",
       
        name: "Boots",
        id: 8,
         collection: "solana",
         price: "0.23",
          owner: 'jaarule',
          type: "car",
          multiplier: "X10",
          volume: 0,
          symbol: "SDC",
           desc: "a nft art incredible"
      },
      {
        image: "/solana.avif",
       
        name: "Boots",
        id: 8,
         collection: "solana",
         price: "0.23",
          owner: 'jaarule',
          type: "car",
          multiplier: "X10",
          volume: 0,
          symbol: "SDC",
           desc: "a nft art incredible"
      },
      {
        image: "/solana.avif",
       
        name: "Boots",
        id: 8,
         collection: "solana",
         price: "0.23",
          owner: 'jaarule',
          type: "car",
          multiplier: "X10",
          volume: 0,
          symbol: "SDC",
           desc: "a nft art incredible"
      },
    

  
  ]

export default Explore
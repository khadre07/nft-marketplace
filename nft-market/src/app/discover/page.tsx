"use client"
import Cube from "@/app/components/Cube"
import { div } from "framer-motion/client"
import Image from "next/image"
import { Slide, Fade } from "react-awesome-reveal"
import {Zap} from 'lucide-react'
import Navbar, { DynamicWalletMultiButton } from "@/app/components/Navbar"
import { useState } from "react"
import Anime from "../components/homeAnim"
import '@/app/components/style.module.scss'
import ShinyText from "../components/shiny"
import GlowText from "../components/backgrougFlick"
import { useRouter } from "next/navigation"
import { cubicBezier } from "motion"
import Address from "../components/address"






const Discover = () => {

    return (
        <div className="h-screen z-index-4 bg-black"
        
        
        >
            {/* <div>
                <Anime/>
            </div> */}
            {/*position: absolute;
bottom: -1px;
right: -1px;
border-bottom: 15px solid rgb(9, 9, 14);
border-left: 15px solid transparent;
width: 0%;
z-index: 2; */}
            <Navbar/>
           
           
              
                <div className="w-full h-[400px] z-index-5 mb-6 mt-12 p-4 ml-12"
                style={{ backgroundImage: "url(https://static.nft.chaingpt.org/images/shopgrid.svg)" }}
                >

                  <div className="flex items-center flex-cols justify-center mt-[2rem] mb-[2rem]">
                    <div className="flex aligns-item">
                       
                          <div className="flex flex-col">
                          <div className="flex items-center justify-center">
                          <h1 className="relative left-[170] top-14 text-6xl font-bold">
                          <ShinyText speedInMs={3000} className="w-fit">
      Discover
    </ShinyText>
                          </h1>
                           <svg viewBox="0 0 220 45" focusable="false" className="line-height-[1em] w-90 h-[5rem] fill-none inset m-auto overflow-hidden relative left-[-115] top-[64]"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.16506V7.00827e-06L178 0V1.16505L8 1.16506Z" fill="url(#paint0_radial_726_12326)"></path><path d="M8 38.835V40H178V38.835H8Z" fill="url(#paint1_radial_726_12326)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M178 38.835V40H8V38.835H178Z" fill="url(#paint2_radial_726_12326)"></path><path fill-rule="evenodd" clipRule="evenodd" d="M1.61058 7.02776L7.24647 1.56255C7.26386 1.54569 7.28062 1.52932 7.29687 1.51345C7.52596 1.2897 7.6536 1.16506 8 1.16506V7.00827e-06C7.59859 7.00827e-06 7.28678 0.0901296 7 0.258854C6.79456 0.379724 6.60198 0.540928 6.39852 0.738226L0.76263 6.20343C0.274359 6.67691 0 7.31945 0 7.98947V10.3883H1.19993V7.98947C1.19993 7.62869 1.34766 7.28271 1.61058 7.02776Z" fill="url(#paint3_radial_726_12326)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.7959H1.19993V37.4755C1.19993 38.2262 1.8267 38.8347 2.59985 38.8347L8 38.835V40L2.59985 39.9998C1.16399 39.9998 0 38.8696 0 37.4755V16.7959Z" fill="url(#paint4_radial_726_12326)"></path><path d="M183.599 0C185.026 0 186.183 1.13016 186.183 2.52427V32.0105C186.183 32.6806 185.91 33.3231 185.425 33.7966L179.825 39.2618C179.341 39.7345 178.685 40 178 40V38.835C178.369 38.835 178.722 38.692 178.983 38.4374L184.582 32.9722C184.844 32.7173 184.99 32.3713 184.99 32.0105V2.52427C184.99 1.77359 184.368 1.16505 183.599 1.16505H178V0H183.599Z" fill="url(#paint5_radial_726_12326)"></path><defs><radialGradient id="paint0_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint1_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint2_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint3_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint4_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint5_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient></defs></svg>
                          </div>
                          <p className="flex mt-16 items-center justify-center text-vargray p-4">See all nfts</p>
                          </div>
                    </div>
                  </div>

                  

                </div>
               
              
            <div className="min-h-screen">
              <div className="border border-vargray  mt-4 mb-4"></div>
            <CardDesign />
            </div>
            

         
         
        </div>
    )
}
const CardDesign = () => {
    return (
      <div>
         <div className="p-6 min-h-screen box-sizing bg-black">
         <div className="font-mono text-[12px] font-normal leading-[16px] uppercase pl-[32px] pt-[41px] text-[rgba(239,239,229,0.6)]">
         <p>ALL items</p>
</div>

         
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-8xl mx-auto ml-40"
     
      
      >
        {COLECTION.map((nft,index) => ( 
          <div className="bg-[#00000] relative p-0 rounded-md  cursor-pointer 
            shadow-[0px_1px_0px_0px_rgb(53,53,57),0px_10px_0px_-4px_rgb(18,18,23),0px_10px_0px_-3px_rgb(53,53,57),0px_20px_0px_-7.5px_rgb(18,18,23),0px_20px_0px_-7px_rgb(53,53,57)] w-[247.6px] h-[472px]">
               <div className="absolute top-0 left-0 border-t-[17px] border-t-[rgb(9,9,14)] border-r-[17px] border-r-transparent w-0 z-[1] ">
</div>

      
            <div key={index} className="shadow-md 
             rounded-xl overflow-hidden bg-blue border border-[1] border-vargray relative group w-[247.6px] h-[472px]"
         >
            {/* NFT Image Container */}
            <div className="relative w-[250px] h-[250px] overflow-hidden">
              {/* Star Icon for favorites */}
              <div className="absolute top-3 left-3 z-10">
                <div className="w-8 h-8 bg-black bg-opacity-40 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              
              {/* Multiplier Badge */}
              <div className="absolute top-0 rounded-t-lg right-0 bg-black z-10">
                <div className="px-2 py-1 bg-black bg-opacity-40 rounded-md text-white text-xs font-medium">
                  {nft.multiplier}
                </div>
              </div>
              
              {/* NFT Image */}
              <div className="relative h-max border-b border-black">
              <div className="relative h-max border-b border-[#353539]">
              <Image
                src={nft.image} 
                alt={nft.name} 
                height={194}
                width={400}
                className="block max-w-[100%] border-0 border-solid box-border break-words w-[100%] h-[261px] object-cover border border:style-none m-0"
                //  style={{clipPath: "polygon(50% 0%, 89% 0, 100% 0, 100% 91%, 90% 100%, 50% 100%, 18% 100%, 0 100%, 0 10%, 14% 0)" }}
                >
                  
              </Image>
              <div className="absolute bottom-0 right-0 z-10" content="''">
                <div className="relative w-[17px] h-[17px]"></div>

           </div>
           <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#0c0c11] to-transparent">
</div>


              
              </div>
              
              
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] w-full h-full  bg-black/60 group-hover:backdrop-blur-sm duration-500">
              <div>
                <Slide cascade>
                  <Buy item={nft.id}
                  />

                  <Fade cascade damping={0.5}>
                   <h3 className="flex items-center justify-center">
                   {nft.desc}
                   </h3>

                  </Fade>

                </Slide>
              </div>
              </div>
              </div>
              
              {/* Diagonal lines overlay */}
              <div className="absolute bottom-0 right-0 w-24 h-24">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="100" x2="100" y2="0" stroke="rgba(55, 65, 81, 0.8)" strokeWidth="1" />
                  <line x1="10" y1="100" x2="100" y2="10" stroke="rgba(55, 65, 81, 0.8)" strokeWidth="1" />
                  <line x1="20" y1="100" x2="100" y2="20" stroke="rgba(55, 65, 81, 0.8)" strokeWidth="1" />
                </svg>
              </div>
            </div>
            
            {/* NFT Details */}
            <div className="border border-solid border-[#353537] rounded-lg p-2 w-full ">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="text-lg font-medium text-white">{nft.name}</h3>
                </div>
                <div className="text-gray-400 text-sm">
                  {nft.symbol}
                </div>
              </div>
              
              {/* Collection Tag */}
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${nft.type === "car" ? "bg-purple-600" : "bg-blue-600"}`}>
                  {nft.type === "car" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-6a1 1 0 00-.293-.707l-2-2A1 1 0 0017 4H3z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-300 text-sm font-medium">{nft.id}</span>
              </div>
              
              {/* ON SALE Tag and OpenSea */}
              <div className="flex justify-between items-center mb-4">
                <div className="border border-teal-400 rounded px-2 py-1">
                  <span className="text-teal-400 text-xs font-medium">
                    ON SALE
                  
       


                  </span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-sm font-medium">OpenSea</span>
                </div>
              </div>
              
              {/* Price and Volume */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                <div>
                  <div className="text-gray-400 text-xs font-medium mb-1">FLOOR</div>
                  <div className="flex items-center">
                    <span className="text-white font-medium">{nft.price}</span>
                    <span className="text-gray-400 ml-1">SOL</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-400 text-xs font-medium mb-1">VOLUME</div>
                  <div className="flex items-center">
                    <span className="text-white font-medium">0</span>
                    <span className="text-gray-400 ml-1">USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
      </div>
       

    )
}
const Buy = ({item}:{item:Number}) => {
    const [showWalletButton, setShowWalletButton] = useState(false);
    const router = useRouter()
  
    const handlerBuy = () => {
      console.log(item, "lid dun element");
      // Affiche le bouton après le clic
      setShowWalletButton(false);
      router.push(`/discover/collections/${item}`)



    };
  
    return (

       <div>
        {/* Affiche le bouton DynamicWalletMultiButton si showWalletButton est true */}
        {showWalletButton ? <DynamicWalletMultiButton /> :      (<button onClick={() => {
          handlerBuy()
        }} className="flex relative w-[194px] cursor-pointer mt-8 ml-12 justify-center mb-4">
                 
                 <svg viewBox="0 0 187 40" focusable="false" className="inline-block line-height-[1em] w-70 h-[3rem] fill-none inset m-auto overflow-hidden"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.16506V7.00827e-06L178 0V1.16505L8 1.16506Z" fill="url(#paint0_radial_726_12326)"></path><path d="M8 38.835V40H178V38.835H8Z" fill="url(#paint1_radial_726_12326)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M178 38.835V40H8V38.835H178Z" fill="url(#paint2_radial_726_12326)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.61058 7.02776L7.24647 1.56255C7.26386 1.54569 7.28062 1.52932 7.29687 1.51345C7.52596 1.2897 7.6536 1.16506 8 1.16506V7.00827e-06C7.59859 7.00827e-06 7.28678 0.0901296 7 0.258854C6.79456 0.379724 6.60198 0.540928 6.39852 0.738226L0.76263 6.20343C0.274359 6.67691 0 7.31945 0 7.98947V10.3883H1.19993V7.98947C1.19993 7.62869 1.34766 7.28271 1.61058 7.02776Z" fill="url(#paint3_radial_726_12326)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.7959H1.19993V37.4755C1.19993 38.2262 1.8267 38.8347 2.59985 38.8347L8 38.835V40L2.59985 39.9998C1.16399 39.9998 0 38.8696 0 37.4755V16.7959Z" fill="url(#paint4_radial_726_12326)"></path><path d="M183.599 0C185.026 0 186.183 1.13016 186.183 2.52427V32.0105C186.183 32.6806 185.91 33.3231 185.425 33.7966L179.825 39.2618C179.341 39.7345 178.685 40 178 40V38.835C178.369 38.835 178.722 38.692 178.983 38.4374L184.582 32.9722C184.844 32.7173 184.99 32.3713 184.99 32.0105V2.52427C184.99 1.77359 184.368 1.16505 183.599 1.16505H178V0H183.599Z" fill="url(#paint5_radial_726_12326)"></path><defs><radialGradient id="paint0_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint1_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint2_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint3_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint4_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient><radialGradient id="paint5_radial_726_12326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.7839 -8.09353) rotate(151.12) scale(99.4293 124.333)"><stop offset="0.196145" stop-color="#434AFF"></stop><stop offset="0.70683" stop-color="#47B2FF"></stop><stop offset="0.988561" stop-color="#39EDAC"></stop></radialGradient></defs></svg>
                 <h2 className="flex relative left-[-100] items-center justify-center">BUY</h2>
              </button>)
             }
        </div>
    );
  };
const COLECTION = [
    {
      image: "/nft.webp",
      isNew: true,
      name: "Rebook",
      id: 19,
      collection: "nft-rule",
      price: "23",
      owner: 'jackson',
      type: "car",
      multiplier: "X10",
      volume: 0,
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

  
export default Discover










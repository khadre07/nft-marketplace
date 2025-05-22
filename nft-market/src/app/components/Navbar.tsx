"use client";
 
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {Sun, Moon, LogOut} from 'lucide-react'
import dynamic from "next/dynamic";
import { isUserAuthenticated } from "@/lib/auth";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import Anim from "./homeAnim";



// Charger dynamiquement le bouton pour éviter le rendu SSR
export const DynamicWalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);


const Navbar = () => {
    //const {theme, toggleTheme} = useTheme()
   // const { publicKey} = useWallet()
   // console.log(publicKey,"publicKey");
   const [isAuthenticated, setIsAuthenticated] = useState(true)


 
    
    return (
        <nav className="border-b border-[1] border-or bg-black p-4 fixed w-full top-0 z-50">
          {/* <Anim/> */}
          
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2" >
                    {/*<Image 
                    src=""
                    alt ="nft"
                    width={40}
                    heigth={40}
                    className="w-10 h-10"
                        /> */}
                       
                </Link>
                <div className="space-x-4 flex items-center">
                    <Link href="/dashboard" className="text-white hidden sm:inline">
                    Profile
                    </Link>
                   
                    <Link href="#" className="text-white hidden sm:inline">
                    Studio
                    </Link>
                    <Link href="/discover" className="text-white hidden sm:inline">
                    Discover
                    </Link>
                    <Link href="#" className="text-white hidden sm:inline">
                    Market
                    </Link>
                  
                   {/* Dynamic Wallet function */}
                   <SearchBar/>
                  
      {/*<DynamicWalletMultiButton />*/ }
  
     
                  
    
   
                </div>
             

                <Moon />
                <Sun />

                
               
            </div>
        </nav>
    )
}

export default Navbar
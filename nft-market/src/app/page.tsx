"use client"

import Link  from "next/link";
import { useEffect } from "react";
import { isUserAuthenticated } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Slide } from "react-awesome-reveal";
import Logo from '@/app/components/logo'


import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import UseAnimationFrame from "./components/homeAnim";
import { Preview } from "./components/typeWriter";

const HomePage = () => {
  const router = useRouter()

  useEffect(()=> {
    const checkAut =async () => {
      const isAuth = await isUserAuthenticated()

      if (isAuth) {
       
        router.replace("/dashboard")

      }

    }
    checkAut()
  }, [])
  return (
    <div className="flex">
   <div className="w-3/4 flex flex-col items-center justify-center bg-primary shadow-2xl shadow-white rounded-lg">
   <Preview/>

    
                 
   
  <div className="flex flex-col justify-space-between">

  </div>
   </div>
  
      
        <div className="w-2/4 bg-black h-screen flex flex-col justify-center rounded shadow-md shadow-white">
         <div className="flex items-center justify-center">
         <Logo x= {360} y= {100}/>
         </div>
         
      <div className="space-x-4 flex flex-row justify-around">
     
        <Link
          href="/register"
          className="bg-primary text-white px-4 py-2 rounded-lg text-2xl shadow-md shadow-white w-[150]"
        >
          <p className="flex items-center justify-center font-bold">Register</p>
          
  
        </Link>
        <Link
          href="/login"
          className="bg-primary text-white px-4 py-2 rounded-lg text-2xl shadow-md shadow-white w-[150]"
        >
          <p className="flex items-center justify-center font-bold">Login</p>
        </Link>

      </div>
        </div>
    
    </div>
  );
};

export default HomePage
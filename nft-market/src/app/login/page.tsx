"use client"

import { useRouter } from 'next/navigation'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import { isUserAuthenticated } from '@/lib/auth'
import {motion, useMotionValue, useAnimate} from "framer-motion"

import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js'
import { animate } from 'motion'
import MoveSquare from '../components/Cube'
import Image from 'next/image'
import Logo from '../components/logo'




const Login =() => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isloading, setLoading] = useState(true)
  const router = useRouter()
  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/api/login",{
        method: "POST",
    
        headers : {
           "Content-type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        }),
        credentials: "include",
       


      })
      console.log(response,"json response");
      if (!response.ok) {
        const errorData = await response.json(); // Récupérer l'erreur envoyée par le backend
        setError(errorData.error || "Erreur inconnue");
        return; 
      }
    
      
      router.push("/dashboard")
      
    } catch (err) {
      setError("unknown error")
      
    }

  }
  useEffect(()=> {
    const checkAut =async () => {
      const isAuth = await isUserAuthenticated()

      if (isAuth) {
       
        router.replace("/dashboard")

      }else{
        setLoading(false)
      }

    }
    checkAut()
  }, [])
  




  // Détecter quand la boîte bleue atteint `x = 176` et bouger la rouge
 
  if (isloading) {
    return <p>Chargement....</p>
  }

  return (
   <div className="flex items-center justify-center w-full">
    <div className='absolute w-[100wv] h-[100vh] top-[0] left-[35] flex items-center gap-2 flex-wrap overflow-hidden
    before:content-[" "] 
    before:absolute 
    before:inset-0 
    before:bg-[linear-gradient(#000,#D4AF37,#000)] 
    before:animate-wall
    '>
    {Array.from({ length: 200 }, (_, index) => (
        <span
          key={index}
          className="relative block duration-[1500ms] z-[2] bg-[#181818]"
          style={{
            width: 'calc(6.25vw - 2px)',
            height: 'calc(6.25vw - 2px)',
            backgroundColor: '#181818',
          }}
        ></span>
      ))}
     
     <div className="flex absolute left-1/3 shadow-[0_15px_35px_rgba(0,0,0,0.9)] items-center justify-center ">
     <div className="bg-black h-screen flex items-center justify-center rounded-lg shadow-2xl border border-primary z-[1000] h-[590px]">
     
     <div className="bg-black w-[500px] h-[600] dark:bg-customGrey p-8 rounded w-[240]  z-[1000]">
       <h1 className="text-4xl flex items-center  mt-[-6] justify-center font-bold text-black dark:text-or mb-6">Login</h1>
       <p className='mb-4 flex items-center justify-center text-gray-400'>this is a nft marketplace</p>
     <Logo x= {90} y={70}/>
       <form onSubmit={handleLogin} className='z-[1000] mt-8'>
       <div className="mb-4">
       <label htmlFor="email" className="block text-sm ml-4 font-medium text-black dark:text-white font-bold mb-4">Email</label>
         <input 
               type="email"
               className="w-full h-[50] border border-gray-300 shadow-full cursor-pointer p-6 dark:border-gray-700 rounded-full bg-primary dark:text-white mb-6"
               id='email'
               value={email}
               onChange={(e)=> setEmail(e.target.value)} />
       </div>
       <div className="mb-4">
         <label htmlFor="password" className="block text-sm font-md text-black dark:text-white mb-4 font-bold ml-4">Password</label>
         <input 
               type="password"
               className="w-full h-[50] border border-gray-300 dark:border-gray-700 rounded-full cursor-pointer p-6 bg-primary dark:text-white mb-6"
               id='password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               />
       </div>
       <div className="mb-4">
         <button type='submit' className='w-full h-[50] text-white bg-or rounded-full'>Login</button>
       </div>
       <div className='flex flex-row text-align'>
         <hr  className='w-[190] ml-4 mt-4 bg-gray-50'>
        
         </hr>
         <h2 className='mb-2 ml-2 text-align text-2xl mr-2'>Or</h2>
         <hr  className='w-[190] mt-4 bg-black'/>
        
       </div>
       <div className='flex justify-between'>
       <div className="mb-4 ml-4">
         <button type='submit' className='w-[200] h-[50] text-white bg-primary border border-white rounded-full'>Google</button>
       </div>
       <div className="mb-4">
         <Link href="/" className='w-[200] h-[50] text-white bg-primary border border-white rounded-full flex flex-row p-3'>
         <svg xmlns="http://www.w3.org/2000/svg" className='w-[40] flex items-center justify-center ml-4'  shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><rect width="5" height="5" rx="115.61" ry="115.61"/><path fill="#fff" fill-rule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z" /></svg>
         <p className='relative left-2 top-0 flex items-center justify-center'>Twitter</p>
         </Link>
       </div>
       </div>
       <div className="mb-4">
         <Link href= "/register" className='text-white font-bold ml-4 p-4'>Register</Link>
       </div>

       </form>
     </div>
   </div>
     </div>
  
     {/* <div className="w-3/5 flex justify-center h-screen items-center rounded-full ">
     <MoveSquare/>
    
    

  


</div> */}
 </div>

   </div>
  
  )
}

export default Login
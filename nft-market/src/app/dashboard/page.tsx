"use client"

import { ReactElement, ReactNode, useState } from "react"
import Image from "next/image"
import { useEffect } from "react"
import {Zap} from "lucide-react"
import {getUserInfo} from '@/lib/auth'
import { useRouter, usePathname } from "next/navigation"
import { NextRequest } from "next/server"
import { isUserAuthenticated } from "@/lib/auth"
import {Sun, Moon, LogOut} from 'lucide-react'
import Login from "../login/page"
import withAuth from "@/utils/withAuth"
import Cube from '@/app/components/Cube'
import { div } from "framer-motion/m"






const Dashboard = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [collection, setCollection] = useState('')
    

    const [solanaWallet, setSolanaWallet] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()
    const currentPath = usePathname()   
    

   
   
      const [data, setData] = useState(null)
      const [isloading, setLoading] = useState(false)
      const [error, setError] = useState(null)
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Log pour déboguer
        console.log('Début de la requête...')
        
        const result = await getUserInfo()
        console.log('Résultat reçu:', result)
        console.log('current path:', currentPath)
        
        setData(result)
        setUsername(result.username)
       const auth =  await isUserAuthenticated()
     
       
       setIsAuthenticated(auth)
      } catch (err) {
        console.error('Erreur dans le composant:', err)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  console.log(username, "logout");
  const handleLogOut =async () => {
    try {
      const response = await fetch('http://localhost:5000/api/logout',{
        method: 'POST',
        credentials: 'include',
        headers: {
         "Content-type": "application/json"
        },
      })
      if (!response) {

      }
      setIsAuthenticated(false)
      router.push('/login')
      
    } catch (error) {
      
    }
  }


  if (isloading) return <div className="flex items-center"><Cube/></div>
  if (error) return <div>Erreur: {error}</div>

    
    
    
      console.log(data,"data");
    return (
        <div className="realive top-100 w-full h-full bg-black">
          <div>
          {isAuthenticated ? 
               <button onClick={handleLogOut}>
                <LogOut/>
               </button> : null
               }

          </div>
            
          <header className="relative top-50">
          <div className="w-full bg-cover bg-no-repeat bg-center top-13" style={{backgroundImage:"url(/girl.avif)"}}>
           <Image 
                    src="/girl.avif"
                    alt=""
                    className="top-43 opacity-0"
                    width={100}
                    height={200}
                    
                    />
           </div>
                <div className="flex items-center justify-content">
                    <Image 
                    src="/girl.avif"
                    alt=""
                    className="realtive left-1/3 top-1/4 ml-24 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white shadow-lg"
  
                    width={100}
                    height={100}
                    />
                   <div className="mt-12">
                  <h1 className="text-white font-bold">{username}</h1>

                </div>
                

            </div>
          </header>
          <main className="flex">
            <div className="mt-12 ml-56 w-1/2 h-auto">
                <div className="flex ml-4 mb-8" id="navbar-search">
                    <p className="text-white ml-4 p-3 border dark:border-gray-700 rounded-full bg-black">Items</p>
                    
                </div>
               
  
                <hr className="border-t border-gray-100 mb-8" />

                <div className="flex flex-row flex-wrap gap-4 items-start">
              
                
               
                    {COLECTION.map((nft) => <ShowNft {...nft}/>)}
                   
                    
                </div>
            </div>


          </main>

        </div>
    )
}
const ShowNft = (props: { image: string , title: string, collection: string, price: string }) => {
    return (
        <div className="card">
            <picture className="block rounded-lg">
                <Image 
                src={props.image}
                alt=""
                width={156}
                height={156}
                className="w-56 h-56 rounded-2xl border dark:border-black-700 shadow-md p-1/2"
                />
               
            </picture>
        <div className="flex flex-items flex-col gap-4">
        <p className="text-white font-medium  mt-3 ml-3">{props.title}</p>
        <div className="flex justify-between">
        <p className="text-white ml-3">{props.collection}</p>
        <div className="flex">
        <p className="font-green ml-3 mr-1/2 text-green">{props.price}</p>
        <Zap color="#26a269"/>
       
        </div>
        </div>
        </div>
            
        <hr className="border border-gray-300 mt-4 mb-6" />
        </div>
    )

}


const COLECTION = [
    {
      image: "/nft.webp",
      isNew: true,
      title: "Rebook",
      id: 1,
      collection: "nft-rule",
      price: "23Sol",
     
    },
    {
      image: "/solana.avif",
      isNew: false,
      title: "Boots",
      id: 2,
       collection: "solana",
       price: "0.23NB",
    },
    {
      image: "/ethereum.avif",
      isNew: false,
      title: "Sneaker",
      id: 3,
       collection: "ethereum",
       price: "0.73BNB",
    },
    {
        image: "/jonh.webp",
        isNew: true,
        title: "NFT",
        id: 4,
         collection: "bitcoin",
         price: "23BNB",
    },
    {
        image: "/jonh.webp",
        isNew: true,
        title: "NFT",
        id: 4,
         collection: "bitcoin",
         price: "23BNB",
    },
    {
      image: "/jonh.webp",
      isNew: true,
      title: "NFT",
      id: 4,
       collection: "bitcoin",
       price: "23BNB",
  },
  {
    image: "/jonh.webp",
    isNew: true,
    title: "NFT",
    id: 4,
     collection: "bitcoin",
     price: "23BNB",
},

{
  image: "/jonh.webp",
  isNew: true,
  title: "NFT",
  id: 4,
   collection: "bitcoin",
   price: "23BNB",
},

{
  image: "/jonh.webp",
  isNew: true,
  title: "NFT",
  id: 4,
   collection: "bitcoin",
   price: "23BNB",
},


    

  
  ]
export default withAuth(Dashboard)



      


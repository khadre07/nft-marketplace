"use client";

import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react";
import Link  from 'next/link';






const Register = () => {
  //retrieve
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [solanaWallet, setSolanaWallet] = useState("");
  const [error, setError] = useState("");


  

  const handleRegister =async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sending request:", JSON.stringify({ username, password, email, solanaWallet }));

    try{
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          email,
          
        }),
        credentials: "include"
        
      })
      if (!response.ok) {
        throw new Error("Error in recordind data")

      }
      const data = await response.json()
      console.log(data, "Message");
      router.push('/login')
      
    }catch {
      //console.error('Error downloading dadat');
      setError(error)
      
    }
    
    //todo
  
    
    
    
  }
  

  return (
   
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-customGrey p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <h2 className='text-white'>Sign Up</h2>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2 text-black dark:text-black">Username</label>
            <input
              type="text" 
              id="username" 
              className="w-full border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-white text-black dark:text-black"
              value ={username}
              onChange={(e) => {setUsername(e.target.value)
              }
              } 
              />



          </div>
         
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-black dark:text-black">Email</label>
            <input  
              type="email" 
              className="w-full border border-gray-300 dark:border-gray-700 rounded bg-white text-black dark:text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-black dark:text-black">Password</label>
            <input 
              type="password"
              id="password" 
              className="w-full border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-white text-black dark:text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="solanaWallet" className="block text-sm font-medium mb-2 text-black dark:text-black">Solana Wallet</label>
            <input 
              type="text"
              id="solanaWallet" 
              className="w-full border border-gray-300 dark:border-gray-700 rounded bg-white text-black dark:text-black"
              value={solanaWallet}
              onChange={(e) => setSolanaWallet(e.target.value)}
              />
          </div> */}
          <button
            type="submit"  
            className="w-full bg-blue-500 text-white p-2 rounded">
              Register
            </button>
            <div className="mb-4">
              <Link href= "/login">Login</Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

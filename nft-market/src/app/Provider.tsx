"use client";

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useEffect, useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';

const Providers = ({children} : {children : React.ReactNode}) => {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [])
 
  


  useEffect(() => {

  }, [])

  
  
  const wallets = useMemo(
    () => [
        new PhantomWalletAdapter,
        new SolflareWalletAdapter,

    ], []
   
)
 return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>


 )
}



   

export default Providers
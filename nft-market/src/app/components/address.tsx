// pages/index.tsx

import { useState, useEffect } from 'react';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';

// Importez les styles pour les composants de wallet
require('@solana/wallet-adapter-react-ui/styles.css');

const Address = () => {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Connexion au réseau Solana (mainnet, devnet ou testnet)
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = clusterApiUrl(network);
  const connection = new Connection(endpoint);

  // Récupérer les informations du wallet lorsqu'il est connecté
  useEffect(() => {
    const getWalletInfo = async () => {
      if (connected && publicKey) {
        try {
          setLoading(true);
          
          // Récupération du solde en SOL
          const solBalance = await connection.getBalance(publicKey);
          setBalance(solBalance / LAMPORTS_PER_SOL);
          
          // Ici vous pouvez ajouter la récupération des SPL tokens
          // C'est plus complexe et nécessite l'utilisation de @solana/spl-token
          // Exemple simplifié:
          // const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, ...);
          // setTokens(tokenAccounts);
          
          setLoading(false);
        } catch (error) {
          console.error("Erreur lors de la récupération des informations du wallet:", error);
          setLoading(false);
        }
      } else {
        setBalance(null);
        setTokens([]);
      }
    };

    getWalletInfo();
  }, [connected, publicKey]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Solana Wallet Info</h1>
      
      <div className="mb-4">
        <WalletMultiButton />
      </div>
      
      {connected && publicKey ? (
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Informations du Wallet</h2>
          
          <div className="mb-2">
            <strong>Adresse:</strong> {publicKey.toString()}
          </div>
          
          {loading ? (
            <p>Chargement des informations...</p>
          ) : (
            <>
              <div className="mb-2">
                <strong>Balance:</strong> {balance !== null ? `${balance} SOL` : 'Non disponible'}
              </div>
              
              {tokens.length > 0 && (
                <div>
                  <strong>Tokens:</strong>
                  <ul className="list-disc pl-5">
                    {tokens.map((token, index) => (
                      <li key={index}>{token.name}: {token.amount}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <p>Connectez votre wallet pour voir les informations</p>
      )}
    </div>
  );
};

export default Address;
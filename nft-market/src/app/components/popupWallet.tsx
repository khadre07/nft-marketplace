// components/WalletModal.tsx
import { FC, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletName } from '@solana/wallet-adapter-base';

interface WalletOption {
  id: string;
  name: string;
  icon: string;
  type: 'solana' | 'evm' | 'tron' | 'other';
}

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletAddress: string) => void;
}

const WalletModal: FC<WalletModalProps> = ({ isOpen, onClose, onConnect }) => {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const { select, wallets, publicKey, connect, connected } = useWallet();

  // Liste des wallets disponibles
  const walletOptions: WalletOption[] = [
    // Solana wallets
    { id: 'phantom', name: 'Phantom', icon: '🌙', type: 'solana' },
    { id: 'solflare', name: 'Solflare', icon: '☀️', type: 'solana' },
    // EVM wallets
    { id: 'metamask', name: 'Metamask', icon: '🦊', type: 'evm' },
    { id: 'binance', name: 'Binance Wallet', icon: '🟡', type: 'evm' },
    { id: 'walletconnect', name: 'WalletConnect', icon: '🔵', type: 'evm' },
    { id: 'trust', name: 'Trust Wallet', icon: '🛡️', type: 'evm' },
    { id: 'coinbase', name: 'Coinbase', icon: '🔵', type: 'evm' },
    // Tron wallets
    { id: 'tronlink', name: 'TronLink', icon: '🔗', type: 'tron' },
    { id: 'okx-tron', name: 'OKX Wallet (for Tron)', icon: '🟦', type: 'tron' },
    // Autres
    { id: 'okx', name: 'OKX Wallet', icon: '🟦', type: 'other' },
    { id: 'bitget', name: 'BitGet', icon: '💠', type: 'other' },
    { id: 'token-pocket', name: 'Token Pocket', icon: '💼', type: 'other' },
  ];

  // Observer le changement de connection et adresse
  useEffect(() => {
    if (connected && publicKey) {
      onConnect(publicKey.toString());
      onClose();
    }
  }, [connected, publicKey]);

  // Gérer la connexion au wallet
  const handleWalletSelect = async (walletId: string, type: string) => {
    setSelectedWallet(walletId);
    
    if (type === 'solana') {
      // Pour Solana, on utilise le wallet-adapter
      const walletAdapter = wallets.find(
        w => w.adapter.name.toLowerCase() === walletId.toLowerCase()
      );
      
      if (walletAdapter) {
        await select(walletAdapter.adapter.name as WalletName);
        try {
          await connect();
        } catch (error) {
          console.error('Erreur de connexion:', error);
        }
      } else {
        alert(`Wallet ${walletId} non disponible. Veuillez l'installer.`);
      }
    } else {
      // Pour les autres wallets (simulation)
      alert(`Connexion à ${walletId} non implémentée dans cette démo.`);
      // Ici vous implémenteriez la connexion à d'autres chaînes selon vos besoins
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 text-white rounded-lg w-full max-w-md p-6 relative">
        {/* Bouton Fermer */}
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            CLOSE &times;
          </button>
        </div>
        
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center mb-2">Connect Wallet</h2>
        <p className="text-center text-gray-400 mb-6">Select your favourite wallet to log in</p>
        
        {/* What is wallet? */}
        <button className="flex items-center justify-center gap-2 text-gray-400 hover:text-white mx-auto mb-6">
          <span className="rounded-full border border-gray-500 w-5 h-5 flex items-center justify-center text-xs">?</span>
          WHAT IS WALLET?
        </button>
        
        {/* Liste des wallets */}
        <div className="mb-4">
          <h3 className="text-gray-400 text-sm mb-2">POPULAR</h3>
          <div className="grid grid-cols-2 gap-3">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.id}
                className={`flex items-center gap-3 p-3 rounded border border-gray-700 hover:bg-gray-800 transition-colors ${
                  selectedWallet === wallet.id ? 'border-blue-500 bg-gray-800' : ''
                }`}
                onClick={() => handleWalletSelect(wallet.id, wallet.type)}
              >
                <span className="text-xl">{wallet.icon}</span>
                <span>{wallet.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
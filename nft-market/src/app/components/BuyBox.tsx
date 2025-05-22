import React, { useEffect, useState } from 'react';

const BuyBox = ({ isconnected, address, balance }: { isconnected: boolean, address: string, balance: string }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [amount, setAmount] = useState('')

  const Transfer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    //const formData = new FormData(e.currentTarget)
    console.log(amount, "amount");
    
    
    //useEffect(()=> {
        
    e.currentTarget.reset()
    //     try {
    //         const response =  fetch("", {
    //             method: "POST",
    //             headers:{
    //                 "Content-type":"Application/json",
    //             },
    //             body: JSON.stringify({
    //                 isconnected,
    //                 address,
    //                 balance,
    //                 amount
    //             })
    //         })
            
    //     } catch (error) {
            
    //     }
    //   },[])

    if (!isconnected) {
      alert('Please connect your wallet first.');
      return;
    }

    setIsProcessing(true);
    console.log('Processing the transfer...');
    
    // Add the logic for the transaction (e.g., buying) here

    setIsProcessing(false);
    //setIsOpen(true)
    console.log(amount);
    
    //try {
        //         const response =  fetch("", {
        //             method: "POST",
        //             headers:{
        //                 "Content-type":"Application/json",
        //             },
        //             body: JSON.stringify({
        //                 isconnected,
        //                 address,
        //                 balance,
        //                 amount
        //             })
        //         })
                
        //     } catch (error) {
                
        //     }
        //   },[])

      
    
  };
  
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 text-white rounded-lg w-full max-w-md p-6 relative">
        <form onSubmit={(e) => {
            Transfer(e)
        }}>
          <div className=''>
          <input
            type="number"
            className="w-full h-[75] top-[115] left-[-175] rounded-xl border-[2] border-or shadow-xl text-black p-4 flex items-center justify center"
            placeholder="Enter amount"
            value={amount}
             onChange={(e) => {setAmount(e.target.value)}}
            
          />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="border p-2 m-4 rounded-xl"
              disabled={isProcessing} 
            //   onClick={() => {setAmount(amount)}}
            >
              {isProcessing ? 'Processing...' : 'Buy'}
            </button>
            <button type="button"  className="border p-2 m-4 rounded-xl" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyBox;

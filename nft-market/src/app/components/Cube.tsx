import { motion } from "framer-motion"


const MoveSquare = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ml-70">
        <motion.div
        className="bg-[#00000] relative p-0 rounded-md w-full cursor-pointer 
  shadow-[0px_1px_0px_0px_rgb(53,53,57),0px_10px_0px_-4px_rgb(18,18,23),0px_10px_0px_-3px_rgb(53,53,57),0px_20px_0px_-7.5px_rgb(18,18,23),0px_20px_0px_-7px_rgb(53,53,57)] w-[40] h-[40]"
       
        initial={{ x: 0, y: 0 }}
        animate={{
           x: [0, 176,176, 176,-1,-1,-1],
          y: [0, 0,  176, 352,352,176,0],
          transition: {
            duration: 12,
            ease: "linear",
            repeat:Infinity           
            
          }
        }}
        
      >
          NFT UNIVERSE
      </motion.div>
 
 <div className="w-40 h-40   opacity-1"></div>
 

  <motion.div 
  className="bg-[#1C4532] relative p-0 rounded-md w-full cursor-pointer 
  shadow-[0px_1px_0px_0px_rgb(53,53,57),0px_10px_0px_-4px_rgb(18,18,23),0px_10px_0px_-3px_rgb(53,53,57),0px_20px_0px_-7.5px_rgb(18,18,23),0px_20px_0px_-7px_rgb(53,53,57)] w-[40] h-[40]"
  initial={{ x: 0, y: -176 }}
  animate={{
    x: [0,0, 176,176, 176,-1,0],
    y: [-176,-176,-176,176, 176,176,-176],
    transition: {
      duration: 13,
      ease: "linear",
      repeat:Infinity           
      
    }
  }}
  >
    MINT YOUR NFT
  </motion.div>

  <motion.div 
 className="bg-[#97266D] relative p-0 rounded-md w-full cursor-pointer 
  shadow-[0px_1px_0px_0px_rgb(53,53,57),0px_10px_0px_-4px_rgb(18,18,23),0px_10px_0px_-3px_rgb(53,53,57),0px_20px_0px_-7.5px_rgb(18,18,23),0px_20px_0px_-7px_rgb(53,53,57)] w-[40] h-[40]"
  initial={{ x: 176, y: 176 }}
  animate={{
    x: [0,-176,-176,-0,0,0],
    y: [176,176,-176,-176,0,176],
    transition: {
      duration: 13,
      ease: "linear",
      repeat:Infinity           
      
    }
  }}
   
  >
     BUY YOUR NFT
  </motion.div>


  <motion.div 
  className="bg-secondary relative p-0 rounded-md w-full cursor-pointer 
  shadow-[0px_1px_0px_0px_rgb(53,53,57),0px_10px_0px_-4px_rgb(18,18,23),0px_10px_0px_-3px_rgb(53,53,57),0px_20px_0px_-7.5px_rgb(18,18,23),0px_20px_0px_-7px_rgb(53,53,57)] w-[40] h-[40]"
  initial={{ x: 0, y: -176 }}
  animate={{
    x: [0,   0, 176, 176,176,0,0],
    y: [-176,-176,-176,-176,0,0,-176],
    transition: {
      duration: 14,
      ease: "linear",
      repeat:Infinity           
      
    }
  }}
  >
  SELL YOUR NFT
  </motion.div>

  {/* <motion.div 
  className="w-40 h-40 bg-pink-500"
    initial={{ x: -0 }}  // Position initiale (décalé à gauche)
        animate={{ x: -176 }}  // Animation vers la position normale
        transition={{ duration: 2 }}
  ></motion.div> */}
  <div className="w-40 h-40 bg-pink"></div>

    </div>
  )
}

export default MoveSquare
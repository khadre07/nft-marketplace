import Typewriter from "@/app/components/TypeWritter";

export function Preview() {
  return (
    <div className="text-3xl flex items-start flex-col justify-between justify-start p-8">
         <p className="whitespace-pre-wrap mb-12">
        {/* <span>{"Welcome our nft marketplace "}</span> */}
        <Typewriter
          text={[
            "WELCOME OUR NFT MARKET",
            "Gain money",
            "Here",
            "Now"
         
          ]}
          
          speed={90}
          className="text-gray-400 text-7xl flex items-center justify-center"
          waitTime={2000}
          deleteSpeed={40}
          cursorChar={"$"}
        />
        

       
         
      </p>
      <p className="whitespace-pre-wrap mb-16">
        <span>{"We're born 🌞 to "}</span>
        <Typewriter
          text={[
            "be rich",
            "buy",
            "sell",
            "mint",
            "create things that make the world a better place",
          ]}
          
          speed={90}
          className="text-secondary text-yellow-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
        

       
         
      </p>
     
    </div>
  )};
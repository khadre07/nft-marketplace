import Image from "next/image"

const Logo = ({x,y} : {x: number, y: number}) => {
    return (
        <div className='absolute top-2'>
      <picture>
        <Image
        src='/logo.png'
        width={x}
        height={y}
        alt='logo'
        className="rounded-full"
        
         />
      </picture>
     </div>
    )
}

export default Logo
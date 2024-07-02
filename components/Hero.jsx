import Image from "next/image"
import photo from "../public/assets/images/nikeShoe.png"; 

const Hero = () => {
  return (
    <div className="h-full relative">
        <div className="flex flex-col md:flex-row h-full">
          <div className="bg-black pt-4 h-[43.5vh] md:h-[83vh] w-full md:w-[50%]">

            {/* text for small screens */}
            <h1 className="text-4xl md:text-6xl md:hidden font-bold text-white text-center mb-6">Step into Style</h1>
            <p className="text-white md:hidden text-center text-xl">Discover our latest collection of comfortable and stylish shoes.</p>

            {/* text for larger screens */}
            <h1 className="h1 hidden md:block font-bold text-white text-right">Step in</h1>
          </div>
          <div className="bg-white pt-4 h-[43.5vh] md:h-[83vh] w-full md:w-[50%]">
            {/* text for larger screens */}
            <h1 className="h1 hidden md:block font-bold text-black text-left">to Style</h1>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <div className="h-[35vh] w-[35vh] md:h-[50vh] md:w-[60vh] relative">
            <Image src={photo} priority quality={100} fill alt="Description" className="object-cover" />
          </div>
        </div>
      </div>
  )
}

export default Hero
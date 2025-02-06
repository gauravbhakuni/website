import Image from "next/image";
import photo from "../public/assets/images/nikeBlackCoolBg.webp";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] w-full"> {/* Added relative positioning */}
      <Image
        src={photo}
        priority
        quality={100}
        fill
        alt="Description"
        className="object-cover md:contain"
      />
    </div>
  );
};

export default Hero;

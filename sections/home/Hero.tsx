import { bg_black, wood_bg_1280 } from "@/public/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Image
        src={bg_black}
        placeholder="blur"
        fill
        alt="Picture of the author"
        sizes="100vw"
        quality={100}
        className="absolute h-full w-full -z-10"
      />
      <div className="">
      </div>
    </div>
  );
};

export default Hero;

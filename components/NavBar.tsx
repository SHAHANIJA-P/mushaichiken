import { bg_black, png_logo } from "@/public/images";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <Image
        src={bg_black}
        placeholder="blur"
        fill
        alt="Picture of the author"
        sizes="100vw"
        quality={100}
        className="object-cover absolute h-full w-full -z-10"
      />
      <nav className="p-4 justify-between flex flex-row w-full h-20">
        <Image
          alt={"Mushaichi Ken Logo"}
          src={png_logo}
          height={100}
          width={100}
          className="h-12 w-24"
        />
        <div>
          <button />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

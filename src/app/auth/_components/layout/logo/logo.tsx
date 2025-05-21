import Image from "next/image";
import React from "react";
import imageLogo from "@assets/images/bro.png";

export default function Logo() {
  return (
    <div className="flex flex-col gap-10  ">
      {/* header */}
      <div className="">
        {/* title */}
        <h1 className="text-5xl  font-bold font-poppins  leading-normal ">
          Welcome to <span className="text-6xl block font-bold text-headerColor ">Elevate</span>
        </h1>

        {/* description */}
        <p className="leading-[40px] mt-2 font-poppins max-w-96">Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>
      </div>

      {/* logo image */}
      <div className="w-full h-60 lg:w-96 md:h-96 relative">
        <Image src={imageLogo} alt="logo image of auth pages" sizes="384px" fill />
      </div>
    </div>
  );
}

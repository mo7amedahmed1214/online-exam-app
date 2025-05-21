import Image from "next/image";
import React from "react";
import image from "@assets/images/user22.jpeg";
import UserInformation from "./_components/user-information";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function User() {
  // setion
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-72 w-full px-4 py-8 shadow-comShadow rounded-20 flex flex-col lg:flex-row  gap-4 lg:gap-14">
      {/* Photo */}
      <div className="w-full lg:w-56 h-214 relative">
        <Image src={image} alt="the photo of the user" fill sizes="100%" />
      </div>

      {/* Information */}
      <UserInformation userInfo={session?.user} />
    </div>
  );
}

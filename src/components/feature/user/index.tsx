import Image from "next/image";
import React from "react";
import image from "../../../../public/assests/images/user22.jpeg";
import UserInformation from "./_components/user-infirmation";
import { getServerSession, Session } from "next-auth";
import { authOption } from "@/auth";

export default async function User() {
  // setion
  const session = await getServerSession(authOption);
  console.log(session);

  return (
    <div className="min-h-72 w-full px-4 py-8 shadow-comShadow rounded-20 flex flex-col lg:flex-row  gap-4 lg:gap-14">
      {/* photo */}
      <div className="w-full lg:w-56 h-214 relative">
        <Image src={image} alt="the photo of the user" fill sizes="100%" />
      </div>

      {/* information */}
      <UserInformation userInfo={session?.user} />
    </div>
  );
}

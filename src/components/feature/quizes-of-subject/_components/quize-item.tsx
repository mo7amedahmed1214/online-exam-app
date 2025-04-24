
import Image from "next/image";
import React from "react";
import Re from "../../../../../public/assests/images/download.png";
import { QuizeCard } from "@/app/(private-pages)/select-quize/_components";
import AddQuistion from "../../add-quistion";
import { getServerSession } from "next-auth";
import { authOption } from "@/auth";

// type props
type QuizeItemProps = {
  quizeInfo: Quiz;
  params: { subjectId: string };
};

export default async function QuizeItem({ quizeInfo, params }: QuizeItemProps) {
  // sessoin
  const sessoin = await getServerSession(authOption);

  return (
    <div className="w-full sm:h-103 shadow-comShadow rounded-10 py-4 px-6 bg-bgComp flex flex-col  sm:flex-row  gap-4">
      {/* logo */}
      <div className="relative w-full h-64  sm:w-70 sm:h-70 ">
        <Image src={Re} fill alt="logo of exam item" sizes="100%" />
      </div>

      {/*  iformation of exam*/}
      <div className="md:h-70 w-full flex justify-between items-center">
        {/* discreption */}
        <div className="space-y-1">
          {/* title */}
          <h5 className="font-medium text-xl  sm:text-md text-black">{quizeInfo.title}</h5>

          {/* number of question */}
          <p className="text-md sm:text-13 text-textSub">{quizeInfo.numberOfQuestions} Quiztion</p>
        </div>

        {/* timer */}
        <div className=" flex flex-col gap-2 justify-center  items-center">
          {/* timer */}
          <p className="text-md sm:text-sm items-baseline"> {quizeInfo.duration} munets</p>

          {/* start btn =>if user*/}
          {sessoin?.user.role === "user" && <QuizeCard quizeId={quizeInfo._id} />}

          {/* add quistion btn => if admin */}
          {sessoin?.user.role === "admin" && (
            <AddQuistion quizeId={quizeInfo._id} params={params} />
          )}

          {/* */}
        </div>
      </div>
    </div>
  );
}

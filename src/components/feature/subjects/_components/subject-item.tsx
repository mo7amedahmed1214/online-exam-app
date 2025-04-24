import Image from "next/image";
import React from "react";
import Link from "next/link";

// type props
type SubjectItemProps = { subjectInfo: Subject };

export default function SubjectItem({ subjectInfo }: SubjectItemProps) {
  return (
    <Link
      href={`/select-quize/${subjectInfo._id}`}
      className="w-330 h-292 bg-green-400 rounded-lg overflow-hidden relative"
    >
      {/* logo */}
      <Image src={subjectInfo.icon} alt={subjectInfo.name} sizes="300px" fill />

      {/* information */}
      <div className="absolute rounded-lg w-276 text-white font-poppins left-7 bottom-7 h-16bg-[rgba(25,53,202,0.4)] backdrop-blur-[27px] p-3 ">
        {/* name */}
        <h3 className="font-bold text-sm">{subjectInfo.name}</h3>

        {/* discreption */}
        <p className="font-medium text-[12px]"> Voluptatem aut ut dignissimos blanditiis</p>
      </div>
    </Link>
  );
}

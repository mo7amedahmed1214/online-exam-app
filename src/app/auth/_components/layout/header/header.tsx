"use client";
import { Pages, Routes } from "@/lib/constants/app.constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  // hooks
  const pathName = usePathname();

  return (
    <ul className="flex items-center justify-center w-fit ml-56 gap-12">
      {/* login */}
      <li
        className={`text-main text-xl w-fit p-5 py-2 font-bold ${pathName === `${Routes.AUTH}/${Pages.LOGIN}` ? "border rounded-2xl  shadow-btnShadow" : ""}`}>
        <Link href={`${Routes.AUTH}/${Pages.LOGIN}`}>Sign in</Link>
      </li>

      {/* register */}
      <li
        className={`text-main text-xl p-5 py-2 w-fit  ${pathName === `${Routes.AUTH}/${Pages.REGISTER}` ? "border rounded-2xl  shadow-btnShadow" : ""}`}>
        <Link href={`${Routes.AUTH}/${Pages.REGISTER}`}>Register</Link>
      </li>
    </ul>
  );
}

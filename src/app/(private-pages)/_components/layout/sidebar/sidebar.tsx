"use client";
import logoTitle from "../../../../../../public/assests/images/Final Logo 1.png";
import Image from "next/image";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { Pages, Routes } from "@/lib/constants/emuns.constant";
import { MdMenu } from "react-icons/md";
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { signOut, useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export function AppSidebar() {
  // hooks
  const pathName = usePathname();

  // seations
  const { data} = useSession();

  return (
    <Sidebar className=" h-fit lg:w-fit   ms-8 border-none">
      <SidebarContent className=" mt-7 lg:-mt-1  bg-white ps-2 lg:ps-0">
        {/* side bar */}
        <ul className={`z-10 space-y-7 lg:space-y-14 mb-4 relative`}>
          {/* close side */}
          <CustomTrigger />

          {/* logo title */}
          <li className="relative h-7 w-40">
            <Image src={logoTitle} alt="title of the website" fill sizes="150px" />
          </li>

          {/* links */}
          <ul className="space-y-8 ps-1  ">
            {/* dishboard */}
            {!data ? (
              <Skeleton className="h-10 w-full rounded-lg" />
            ) : (
              data.user.role === "user" && (
                <li>
                  <Link
                    href={`${Routes.ROOT}`}
                    className={`p-2 text-md md:text-xl font-poppins rounded-lg font-semibold text-textColor ${pathName === `${Routes.ROOT}` ? "bg-main !text-white " : ""}`}
                  >
                    <MdSpaceDashboard
                      className={`inline-block w-7 h-6 mr-8 text-main  ${pathName === `${Routes.ROOT}` ? "bg-main !text-white " : ""}`}
                    />
                    Dashboard
                  </Link>
                </li>
              )
            )}

            {/* history */}
            {!data ? (
              <Skeleton className="h-10 w-full rounded-lg" />
            ) : (
              data.user.role === "user" && (
                <li>
                  <Link
                    href={`${Routes.QUIZ_HISTORY}`}
                    className={`p-2 text-md md:text-xl font-poppins rounded-lg font-semibold text-textColor ${pathName === `${Routes.QUIZ_HISTORY}` ? "bg-main !text-white " : ""}`}
                  >
                    <FaHistory
                      className={`inline-block w-7 h-6 mr-8 text-main  ${pathName === `${Routes.QUIZ_HISTORY}` ? "bg-main !text-white " : ""}`}
                    />
                    Ouiz History
                  </Link>
                </li>
              )
            )}

            {/* admin */}
            {!data ? (
              <Skeleton className="h-10 w-full rounded-lg" />
            ) : (
              data.user.role === "admin" && (
                <li>
                  <Link
                    href={`${Routes.ADMIN}`}
                    className={`p-2 text-md md:text-xl font-poppins rounded-lg font-semibold text-textColor ${pathName === `${Routes.ADMIN}` ? "bg-main !text-white " : ""}`}
                  >
                    <MdSpaceDashboard
                      className={`inline-block w-7 h-6 mr-8 text-main  ${pathName === `${Routes.ADMIN}` ? "bg-main !text-white " : ""}`}
                    />
                    Admin
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* log out */}
          <li className="ps-1">
            <Link
              onClick={() => signOut({ callbackUrl: (window.location.href = "/auth/signin") })}
              href={`${Routes.AUTH}/${Pages.LOGIN}`}
              className={`p-2 text-md md:text-xl font-poppins rounded-lg font-semibold text-textColor ${pathName === `${Routes.AUTH}/${Pages.LOGIN}` ? "bg-main !text-white " : ""}`}
            >
              <RiLogoutBoxFill
                className={`inline-block w-7 h-6 mr-8 text-main  ${pathName === `${Routes.AUTH}/${Pages.LOGIN}` ? "bg-main !text-white " : ""}`}
              />
              Log Out
            </Link>
          </li>
        </ul>
      </SidebarContent>
    </Sidebar>
  );
}

// component trigger
export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button className="h-fit z-[70] fixed top-4 left-5 lg:hidden w-fit" onClick={toggleSidebar}>
      <MdMenu className="text-4xl text-white" />
    </button>
  );
}

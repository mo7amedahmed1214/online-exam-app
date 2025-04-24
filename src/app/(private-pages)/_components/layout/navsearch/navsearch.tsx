"use client";
import AddDeploma from "@/components/feature/add-diploma";
import AddQuize from "@/components/feature/add-quize";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userContext } from "@/context/user.context";
import { Routes } from "@/lib/constants/emuns.constant";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
const im =
  "data:image/jpeg;base64,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";

export default function NavSearch() {
  // context
  const context = useContext(userContext);
  if (!context) {
    throw new Error("");
  }
  const { id } = context;
  
  // sesstion
  const { data } = useSession();

  // hooks
  const pathName = usePathname();

  // searsh params
  const searchParams = useSearchParams();

  // navigation
  const router = useRouter();

  // function
  const handlParams = (value: string) => {
    // send value of input as searshParaams
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    // navaigate to new url with searshparams
    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className=" z-[60]  lg:w-full h-16 px-3  lg:p-1 flex gap-6 bg-main lg:bg-white  fixed  left-0 right-0  lg:relative lg:left-0  ">
      {/* search input */}
      <Input
        type="search"
        onChange={(e) => handlParams(e.target.value)}
        placeholder={
          pathName === Routes.ROOT || pathName === Routes.ADMIN ? "Search Subject" : "Search Quize"
        }
        className="ml-20 lg:ml-0 !rounded-20 shadow-inputShadow form-control h-full"
      />

      {/*add diploma if admin  */}
      {data?.user.role === "user" && pathName === "/admin" && <AddDeploma />}
      {data?.user.role === "user" && pathName === `${Routes.SELECT_QIUZ}/${id}` && <AddQuize />}

      {/* profile photo */}
      <Avatar className="h-full w-14">
        <AvatarImage src={im} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

import React, { ReactNode } from "react";
import NavSearch from "./_components/layout/navsearch/navsearch";
import { AppSidebar, CustomTrigger } from "./_components/layout/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <main className="pt-0 lg:pt-10 gap-8  lg:pe-20 pe-8 flex lg:gap-[50px] ">
      {/* layout */}
      <section className="">
        {/* <Sidebar /> */}
        <SidebarProvider>
          <CustomTrigger />
          <AppSidebar />
        </SidebarProvider>
      </section>

      {/* children */}
      <section className="flex flex-col    gap-10 w-full">
        {/* nav component */}
        <NavSearch />

        {/* children props */}
        <div className="mt-20 lg:mt-0">{children}</div>
      </section>
    </main>
  );
}

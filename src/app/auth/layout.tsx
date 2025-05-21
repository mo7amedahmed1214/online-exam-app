import React, { ReactNode } from "react";
import Logo from "./_components/layout/logo/logo";
import Header from "./_components/layout/header/header";
import Socail from "./_components/layout/socail/socail";

// type of Props
type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grid grid-cols-2 gap-8 lg:gap-32 h-screen fixed left-0 right-0">
      {/* layout */}
      <section className="px-4 sm:px-10 md:px-14 lg:px-20 py-10  bg-custom-gray-50  md:rounded-tr-100 md:rounded-br-100 shadow-2xl h-screen">
        <Logo />
      </section>

      {/* children */}
      <section className="py-10 overflow-y-auto ">
        {/* header component*/}
        <Header />

        {/* childern */}
        <main>
          {children}

          {/* socail component */}
          <Socail />
        </main>
      </section>
    </main>
  );
}

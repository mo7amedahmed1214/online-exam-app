import React from "react";
import FormRegister from "./_components/form-register";
import { Metadata } from "next";

export default function Page() {
  return <FormRegister />;
}



// metadata
export const metadata: Metadata = {
  title: "Sign Up Page",
  description: "this is the  page of Sign Up",
};
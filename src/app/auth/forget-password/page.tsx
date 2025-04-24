import React from "react";
import FormForgetPassword from "./_components/form-forget-password";
import { Metadata } from "next";

export default function Page() {
  return <FormForgetPassword />;
}

// metadata
export const metadata: Metadata = {
  title: "Forget Password Page",
  description: "this is the  page of forget password",
};

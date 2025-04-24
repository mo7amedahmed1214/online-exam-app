import React from "react";
import FormResetPassword from "./_components/form-reset-password";
import { Metadata } from "next";

export default function Page() {
  return <FormResetPassword />;
}

// metadata
export const metadata: Metadata = {
  title: "Reset Password Page",
  description: "this is the  page of reset password",
};

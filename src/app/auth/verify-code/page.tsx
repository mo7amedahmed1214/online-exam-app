import React from "react";
import FormVerifyCode from "./_components/form-verify-code";
import { Metadata } from "next";

export default function Page() {
  return <FormVerifyCode />;
}

// metadata
export const metadata: Metadata = {
  title: "Verify Code Page",
  description: "this is the  page of Verify Code",
};

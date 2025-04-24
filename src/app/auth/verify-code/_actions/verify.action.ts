"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { verifyFieldes } from "@/lib/schemes/auth.schema";

export async function verifyCode(values: verifyFieldes) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: { ...JSON_HEADER },
  });

  const payload: ApiVerify = await response.json();

 

  console.log(payload);
  return payload;
}

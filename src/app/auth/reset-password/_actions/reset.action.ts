"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { resetPasswordFieldes } from "@/lib/schemes/auth.schema";


export async function resetPassword(values: resetPasswordFieldes) {
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: { ...JSON_HEADER },
  });

  const payload: ApiResponse<ResetResponse> = await response.json();

  

  console.log(payload);
  return payload;
}

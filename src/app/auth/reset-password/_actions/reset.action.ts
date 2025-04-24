"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { resetPasswordFieldes } from "@/lib/schemes/auth.schema";
import { ResetResponse } from "@/lib/types/auth";

export async function resetPassword(values: resetPasswordFieldes) {
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: { ...JSON_HEADER },
  });

  const payload: ApiResponse<ResetResponse> = await response.json();

  //handle if payload if success or error
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  console.log(payload);
  return payload;
}

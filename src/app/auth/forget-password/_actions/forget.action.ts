"use server";
import { JSON_HEADER } from "@/lib/constants/api.constant";
import { forgetFieldes } from "@/lib/schemes/auth.schema";


export async function forgetPassword(values: forgetFieldes) {
  const respons = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: ApiResponse<ForgetResponse> = await respons.json();

  // handel if payload is success or error
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  console.log(payload);
  return payload;
}

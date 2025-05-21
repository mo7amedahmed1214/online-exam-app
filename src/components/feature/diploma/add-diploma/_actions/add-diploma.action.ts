"use server";
import { handelToken } from "@/lib/utils/get-token";

export async function addDiplomaAction(values: FormData) {
  // fetch
  const respons = await fetch(`${process.env.API}/subjects`, {
    method: "POST",
    headers: {
      ...(await handelToken()),
    },
    body: values,
  });

  const payload: ApiResponse<Subject> = await respons.json();

  return payload;
}

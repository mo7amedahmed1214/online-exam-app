import "server-only";
import { decode, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";
import { cookiesName } from "../constants/cookies.constant";

export async function handelToken() {
  // varibles
  const tokenCookies = cookies().get(cookiesName)?.value;
  let token: JWT | null = null;

  try {
    token = await decode({
      secret: process.env.NEXTAUTH_SECRET!,
      token: tokenCookies,
    });
  } catch (error) {console.log(error);
  }

  return {
    token: token?.token || "",
  };
}

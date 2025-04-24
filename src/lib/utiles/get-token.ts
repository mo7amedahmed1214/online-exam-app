import "server-only";
import { decode, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function handelToken() {
  // varibles
  const tokenCookies = cookies().get("next-auth.session-token")?.value;
  let token: JWT | null = null;

  try {
    token = await decode({
      secret: process.env.NEXTAUTH_SECRET!,
      token: tokenCookies,
    });
  } catch (error) {}

  return {
    token: token?.token || "",
  };
}

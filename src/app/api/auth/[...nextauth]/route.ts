import { authOption } from "@/auth";
import NextAuth from "next-auth";

export const handlar= NextAuth(authOption)

export{handlar as GET ,handlar as POST}
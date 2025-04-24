/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { UserApp } from "./auth";
void NextAuth;

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    token: string;
    user: UserApp;
  }

 /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends Omit<User, "token"> {
    user: UserApp["user"];
  }
}

declare module "next-auth/jwt" {
   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {}
  void JWT;
}

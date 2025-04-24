"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type UserContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};

export const userContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState("");

  return <userContext.Provider value={{ id, setId }}>{children}</userContext.Provider>;
}

"use client";

import { userContext } from "@/components/providers/user/user.provider";
import { useContext, useEffect } from "react";

type ClientProps = {
  params: { subjectId: string };
};

export default function Client({ params }: ClientProps) {
  // context
  const context = useContext(userContext);
  if (!context) {
    throw new Error("");
  }

  // varible
  const { setId } = context;

  // effect
  useEffect(() => {
    setId(params!.subjectId);
  }, [setId, params]);

  return <></>;
}

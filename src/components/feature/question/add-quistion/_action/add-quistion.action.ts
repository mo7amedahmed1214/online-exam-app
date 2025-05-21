"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { addQuestionFields } from "@/lib/schemes/add-question.schema";
import { handelToken } from "@/lib/utils/get-token";

export async function addQuistion(values: addQuestionFields) {
  // fetch
  const respons = await fetch(`${process.env.API}/questions`, {
    method: "POST",
    headers: {
      ...JSON_HEADER,
      ...(await handelToken()),
    },
    body: JSON.stringify(values),
  });

  const payload: ApiResponse<AddQuestion> = await respons.json();

  return payload;
}

"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { AnswerFields } from "@/lib/schemes/quize.schema";
import { handelToken } from "@/lib/utiles/get-token";

export async function finshExam(answerFields: AnswerFields) {
  const respons = await fetch(`${process.env.API}/questions/check`, {
    method: "POST",
    headers: {
      ...JSON_HEADER,
      ...(await handelToken()),
    },
    body: JSON.stringify(answerFields),
  });

  const payload: ApiResponse<QuizResult> = await respons.json();
  console.log(payload);

  // handle error
  if ("code" in payload) throw new Error(payload.message);

  return payload;
}

import { useMutation } from "@tanstack/react-query";

import { finshExam } from "../_actions/quize.action";
import { AnswerFields } from "@/lib/schemes/quize.schema";

export default function useQuistion() {
  // mutation
  const {
    isPending,
    error,
    mutate: submitQuize,
    data,
  } = useMutation({
    mutationFn: async (answerFields: AnswerFields) => {
      const payload = await finshExam(answerFields);

      // handle error
      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },

    onSuccess(data) {
      console.log(data);
    },
  });

  return { isPending, error, submitQuize, data };
}

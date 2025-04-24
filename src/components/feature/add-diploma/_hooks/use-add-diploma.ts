import { addQuestionFields } from "@/lib/schemes/add-question.schema";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { addDiplomaAction } from "../_actions/add-diploma.action";
import { addDiplomaFields } from "@/lib/schemes/add-diploma.schema";

export default function useAddDiploma() {
  //   mutation
  const {
    data,
    isPending,
    error,
    mutate: addDiploma,
  } = useMutation({
    // fun
    mutationFn: async (values: FormData) => {
      const respons = await addDiplomaAction(values);

      return respons;
    },

    onSuccess(data, variables, context) {
      toast.success("Question adding successfully");
    },
    onError(error, variables, context) {
      toast.error(error.message);
    },
  });

  return { data, isPending, error, addDiploma };
}

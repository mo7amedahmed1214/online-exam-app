import { addQuestionFields } from "@/lib/schemes/add-question.schema";
import { useMutation } from "@tanstack/react-query";
import { addQuistion } from "../_action/add-quistion.action";
import toast from "react-hot-toast";

export default function useAddQuistion() {
  //   mutation
  const {
    data,
    isPending,
    error,
    mutate: addQuetion,
  } = useMutation({
    // fun
    mutationFn: async (values: addQuestionFields) => {
      const respons = await addQuistion(values);

      return respons;
    },

    onSuccess(data, variables, context) {
      toast.success("Question adding successfully");
    },
    onError(error, variables, context) {
      toast.error("Question already exsist");
    },
  });

  return { data, isPending, error, addQuetion };
}

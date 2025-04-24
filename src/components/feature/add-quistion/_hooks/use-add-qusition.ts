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

      if ("code" in respons) {
        throw new Error(respons.message);
      }

      return respons;
    },

    onSuccess() {
      toast.success("Question adding successfully");
    },
    onError() {
      toast.error("Question already exsist");
    },
  });

  return { data, isPending, error, addQuetion };
}

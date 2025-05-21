import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { addDiplomaAction } from "../_actions/add-diploma.action";

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

      // handle error
      if ("code" in respons) {
        console.log("err", respons.message);
        throw new Error(respons.message);
      }

      return respons;
    },

    onSuccess() {
      toast.success("Question adding successfully");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { data, isPending, error, addDiploma };
}

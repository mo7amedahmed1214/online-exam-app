import { registerFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { signUp } from "../_actions/register.action";
import { Pages, Routes } from "@/lib/constants/emuns.constant";
import { useRouter } from "next/navigation";

export default function useRegister() {
  // navigation
  const router = useRouter();

  //mutiation
  const { error, isPending, mutate } = useMutation({
    // resiter fun
    mutationFn: async (registerFields: registerFields) => {
      const toastId = toast.loading("loading");
      try {
        const response = await signUp(registerFields);
      } finally {
        toast.dismiss(toastId);
      }
    },

    // handle success
    onSuccess() {
      setTimeout(() => router.push(`${Routes.AUTH}/${Pages.LOGIN}`), 1000);
      toast.success("acount creating successfully");
    },

    // handle error
    onError(error) {
      toast.error(error.message);
    },
  });

  return { error, register: mutate, isPending };
}

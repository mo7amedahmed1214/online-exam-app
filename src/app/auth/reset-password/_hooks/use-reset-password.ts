import { resetPasswordFieldes } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Pages, Routes } from "@/lib/constants/app.constant";
import { useRouter } from "next/navigation";
import { resetPassword } from "../_actions/reset.action";

export default function useResetPassword() {
  // navigation
  const router = useRouter();

  //mutiation
  const { error, isPending, mutate } = useMutation({
    // resiter fun
    mutationFn: async (resetPasswordFieldes: resetPasswordFieldes) => {
      const toastId = toast.loading("loading");
      try {
        const response = await resetPassword(resetPasswordFieldes);

        //handle if payload if success or error
        if ("code" in response) {
          throw new Error(response.message);
        }
        toast.success(response.message);
      } finally {
        toast.dismiss(toastId);
      }
    },

    // handle success
    onSuccess() {
      setTimeout(() => {
        router.push(`${Routes.AUTH}/${Pages.LOGIN}`);
      }, 1000);
    },

    // handle error
    onError(error) {
      toast.error(error.message);
    },
  });

  return { error, resetPass: mutate, isPending };
}

import { verifyFieldes } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Pages, Routes } from "@/lib/constants/emuns.constant";
import { useRouter } from "next/navigation";
import { verifyCode } from "../_actions/verify.action";

export default function useVrifyCode() {
  // navigation
  const router = useRouter();

  //mutiation
  const { error, isPending, mutate } = useMutation({
    // resiter fun
    mutationFn: async (verifyFieldes: verifyFieldes) => {
      const toastId = toast.loading("loading");
      try {
        const response = await verifyCode(verifyFieldes);

        // handle error
        if ("code" in response) {
          throw new Error(response.message);
        }

        toast.success(response.status);
      } finally {
        toast.dismiss(toastId);
      }
    },

    // handle success
    onSuccess() {
      // navigate if repo success
      setTimeout(() => {
        router.push(`${Routes.AUTH}/${Pages.RESET_PASSWORD}`);
      }, 1000);
    },

    // handle error
    onError(error) {
      toast.error(error.message);
    },
  });

  return { error, verify: mutate, isPending };
}

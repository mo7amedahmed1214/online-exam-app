import { forgetFieldes } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Pages, Routes } from "@/lib/constants/emuns.constant";
import { useRouter } from "next/navigation";
import { forgetPassword } from "../_actions/forget.action";

export default function UseForgetPassword() {
  // navigation
  const router = useRouter();

  //mutiation
  const { error, isPending, mutate } = useMutation({
    // resiter fun
    mutationFn: async (forgetFields: forgetFieldes) => {
      const toastId = toast.loading("loading");
      try {
        const response = await forgetPassword(forgetFields);
        toast.success(response.info);
      } finally {
        toast.dismiss(toastId);
      }
    },

    // handle success
    onSuccess() {
      // navigation if respons success
      setTimeout(() => {
        router.push(`${Routes.AUTH}/${Pages.VERIFY_PASSWORD}`);
      }, 1000);
    },

    // handle error
    onError() {
      toast.error("Email not found");
    },
  });

  return { error, forgetPass: mutate, isPending };
}

import { loginFieldes } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function useLogin() {
  // mutation
  const { isPending, error, mutate } = useMutation({
    // login fun
    mutationFn: async (loginFieldes: loginFieldes) => {
      const toastId = toast.loading("loading");
      try {
        const response = await signIn("credentials", {
          redirect: false,
          email: loginFieldes.email,
          password: loginFieldes.password,
        });

        if (response?.error) throw new Error(response.error);

        if (response?.ok) return response;
      } finally {
        toast.dismiss(toastId);
      }
    },

    onSuccess() {
      toast.success("login successfully");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    },

    onError(error) {
      toast.error(error.message);
    },
  });

  return { error, isPending, login: mutate };
}

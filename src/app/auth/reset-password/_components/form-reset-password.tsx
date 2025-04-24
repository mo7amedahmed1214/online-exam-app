"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPasswordFieldes, resetPasswordSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import useResetPassword from "../_hooks/use-reset-password";

export default function FormResetPassword() {
  // Navigation
  const router = useRouter();

  // mutation
  const { isPending, error, resetPass } = useResetPassword();
  const [showPass, setShowPass] = useState<boolean>(false);

  // Form
  const form = useForm<resetPasswordFieldes>({
    defaultValues: {
      email: "",
      newPassword: "",
    },

    mode: "onBlur",
    resolver: zodResolver(resetPasswordSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<resetPasswordFieldes> = async (values) => {
    resetPass(values);
  };

  return (
    <div className="max-w-100 space-y-8 mt-24 mb-2">
      {/* title */}
      <h3 className="text-black text-2xl font-bold font-poppins">Set a password</h3>

      {/* form */}
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only">Email</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    type="email"
                    className={`form-control   bg-inputBg ${form.formState.errors.email ? "border-borderHover " : ""}`}
                  />
                </FormControl>

                {/* feedback */}
                <FormMessage>
                  {/* handle eeror */}
                  {error && <>{error.message}</>}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="relative">
                {/* lable */}
                <FormLabel className="sr-only">new password</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="new Password"
                    {...field}
                    type={showPass ? "text" : "password"}
                    className={`form-control   bg-inputBg ${form.formState.errors.newPassword ? "border-borderHover " : ""}`}
                  />
                </FormControl>

                {/* show pass */}
                <div
                  className="absolute text-xl top-3 right-3 flex items-center text-iconPass"
                  onClick={() => setShowPass((prev) => !prev)}
                >
                  {showPass ? <VscEye /> : <VscEyeClosed />}
                </div>

                {/* feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* submit */}
          <Button
            disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
            type="submit"
            variant={"authBtn"}
            size={"autBtn"}
          >
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}

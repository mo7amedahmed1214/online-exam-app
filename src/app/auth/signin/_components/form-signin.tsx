"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { loginFieldes, loginSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pages, Routes } from "@/lib/constants/app.constant";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import useLogin from "../_hooks/use-login";

export default function FormSignIn() {
  // mutaion
  const { error, isPending, login } = useLogin();

  // state
  const [showPass, setShowPass] = useState<boolean>(false);

  // Form
  const form = useForm<loginFieldes>({
    defaultValues: {
      email: "",
      password: "",
    },

    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<loginFieldes> = async (values) => {
    login(values);
  };

  return (
    <div className="max-w-100 space-y-7 mt-20">
      {/* title */}
      <h3 className="text-black text-2xl font-bold ">Sign in</h3>

      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only"> Email</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="Enter Email"
                    {...field}
                    type="email"
                    className={`form-control relative   bg-inputBg ${form.formState.errors.email ? "border-borderHover " : ""}`}
                  />
                </FormControl>

                {/* feedback */}
                <FormMessage>
                  {/* handle email or pass incorrect */}
                  {error && error.message === "incorrect email or password" && <>{error.message}</>}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                {/* lable */}
                <FormLabel className="sr-only">password</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type={showPass ? "text" : "password"}
                    className={`form-control   bg-inputBg ${form.formState.errors.password ? "border-borderHover focus:border-borderHover" : ""}`}
                  />
                </FormControl>

                {/* show password */}
                <div
                  className="absolute text-xl top-3 right-3 flex items-center text-iconPass"
                  onClick={() => setShowPass((prev) => !prev)}>
                  {showPass ? <VscEye /> : <VscEyeClosed />}
                </div>

                {/* feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* forget password */}
          <p className="relative -top-4 font-medium w-fit   ml-auto">
            <Link
              href={`${Routes.AUTH}/${Pages.FORGOT_PASSWORD}`}
              className="text-main hover:text-mainHover transition-colors duration-300 font-poppins ">
              {" "}
              Recover Password?
            </Link>
          </p>

          {/* submit */}
          <Button
            disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
            type="submit"
            variant={"authBtn"}
            size={"autBtn"}>
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}

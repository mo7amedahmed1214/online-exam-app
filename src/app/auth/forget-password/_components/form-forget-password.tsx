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
import Link from "next/link";
import { forgetFieldes, forgetSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";;
import { Pages, Routes } from "@/lib/constants/emuns.constant";
import UseForgetPassword from "../_hooks/use-forget-password";

export default function FormForgetPassword() {
  

  // mutation
  const { isPending, forgetPass, error } = UseForgetPassword();

  // Form
  const form = useForm<forgetFieldes>({
    defaultValues: {
      email: "",
    },

    mode: "onBlur",
    resolver: zodResolver(forgetSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<forgetFieldes> = async (values) => {
    forgetPass(values);
  };

  return (
    <div className="max-w-100 space-y-8 mt-28">
      {/* title */}
      <h3 className="text-black text-2xl font-bold font-poppins ">Forget your password?</h3>

      {/* form */}
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only">Email</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="Enter Email"
                    {...field}
                    type="email"
                    className={`form-control   bg-inputBg ${form.formState.errors.email ? "border-borderHover" : ""}`}
                  />
                </FormControl>

                {/* feedback */}
                <FormMessage>
                  {/* handle email */}
                  {error && <>{error.message}</>}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* forget passsword */}
          <p className="relative -top-4 font-medium w-fit ml-auto">
            <Link
              href={`${Routes.AUTH}/${Pages.FORGOT_PASSWORD}`}
              className="text-main hover:text-mainHover transition-colors duration-300  font-poppins"
            >
              {" "}
              Recover Password?
            </Link>
          </p>

          {/* submit */}
          <Button
            disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
            type="submit"
            variant={"authBtn"}
            size={"autBtn"}
          >
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}

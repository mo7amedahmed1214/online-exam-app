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
import { verifyFieldes, verifySchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useVrifyCode from "../_hooks/use-vrify-code";

export default function FormVerifyCode() {
  // mutation
  const { isPending, verify, error } = useVrifyCode();

  // Form
  const form = useForm<verifyFieldes>({
    defaultValues: {
      resetCode: "",
    },

    mode: "onBlur",
    resolver: zodResolver(verifySchema),
  });

  // Functions
  const onSubmit: SubmitHandler<verifyFieldes> = async (values) => {
    verify(values);
  };

  return (
    <div className="max-w-100 space-y-8 mt-24">
      {/* title */}
      <h3 className="text-black text-2xl font-bold font-poppins">Verify code</h3>

      {/* form */}
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="resetCode"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only">Enter Code</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="Enter Code"
                    {...field}
                    type="text"
                    className={`form-control   bg-inputBg ${form.formState.errors.resetCode ? "border-borderHover " : ""}`}
                  />
                </FormControl>

                {/* feedback */}
                <FormMessage>
                  {/* handle invalid code */}
                  {error && <>{error.message}</>}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* reset code */}
          <p className="relative -top-4 font-medium w-fit ml-auto font-poppins">
            Didn’t receive a code?
            <Link
              href=""
              className="text-main hover:text-mainHover transition-colors duration-300 "
            >
              {" "}
              Resend
            </Link>
          </p>

          {/* submit */}
          <Button
            disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
            type="submit"
            variant={"authBtn"}
            size={"autBtn"}
          >
            Verify
          </Button>
        </form>
      </Form>
    </div>
  );
}

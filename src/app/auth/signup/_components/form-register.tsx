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
import { registerFields, registerSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pages, Routes } from "@/lib/constants/emuns.constant";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import useRegister from "../_hooks/use-register";

export default function FormRegister() {
    // mutation
  const { error, isPending, register } = useRegister();

  // state
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showRePass, setShowRePass] = useState<boolean>(false);

  // Form
  const form = useForm<registerFields>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },

    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  // Functions
  const onSubmit: SubmitHandler<registerFields> = async (values) => {
    register(values);
  };

  return (
    <div className="max-w-100 space-y-7 mt-8">
      {/* Title */}
      <h3 className="text-black text-2xl font-bold ">Sign up</h3>

      {/* form */}
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          {/* username */}
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only">usernme</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    type="text"
                    className={`form-control   bg-inputBg  ${form.formState.errors.username ? "border-borderHover " : "focus:border-borderColor2 "}`}
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage>
                  {/* handle exsist username */}
                  {error && error.message === "username already exists" && <>{error.message}</>}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* frist name */}
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only">frist name</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input
                    placeholder="Frist Name"
                    {...field}
                    type="text"
                    className={`form-control   bg-inputBg  ${form.formState.errors.firstName ? "border-borderHover " : "focus:border-borderColor2 "}`}
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* last name*/}
          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only">last name</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    {...field}
                    type="text"
                    className={`form-control   bg-inputBg  ${form.formState.errors.lastName ? "border-borderHover " : "focus:border-borderColor2 "}`}
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only">email</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    type="email"
                    className={`form-control   bg-inputBg  ${form.formState.errors.email ? "border-borderHover " : "focus:border-borderColor2 "}`}
                  />
                </FormControl>

                {/* feedback */}
                <FormMessage>
                  {/* handle exsist email */}
                  {error && error.message === "email already exists" && <>{error.message}</>}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            name="password"
            control={form.control}
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
                    className={`form-control   bg-inputBg  ${form.formState.errors.password ? "border-borderHover " : "focus:border-borderColor2 "}`}
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

          {/* confirm passsword */}
          <FormField
            name="rePassword"
            control={form.control}
            render={({ field }) => (
              <FormItem className="relative">
                {/* lable */}
                <FormLabel className="sr-only">rePassword</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type={showRePass ? "text" : "password"}
                    {...field}
                    className={`form-control   bg-inputBg  ${form.formState.errors.rePassword ? "border-borderHover " : "focus:border-borderColor2 "}`}
                  />
                </FormControl>

                {/* show pass */}
                <div
                  className="absolute text-xl top-3 right-3 flex items-center text-iconPass"
                  onClick={() => setShowRePass((prev) => !prev)}
                >
                  {showRePass ? <VscEye /> : <VscEyeClosed />}
                </div>

                {/* feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phone */}
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* lable */}
                <FormLabel className="sr-only">phone</FormLabel>

                {/* field */}
                <FormControl>
                  <Input
                    placeholder="Your phone"
                    type="tel"
                    {...field}
                    className={`form-control   bg-inputBg  ${form.formState.errors.phone ? "border-borderHover " : "focus:border-borderColor2 "}`}
                  />
                </FormControl>

                {/* feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* have account */}
          <p className="relative -top-4 font-medium text-black font-poppins text-center">
            Already have an account?
            <Link
              href={`${Routes.AUTH}/${Pages.LOGIN}`}
              className="text-main hover:text-mainHover hover:underline  transition-all duration-300 "
            >
              {" "}
              Login
            </Link>
          </p>

          {/* Submit */}
          <Button
            disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
            type="submit"
            variant={"authBtn"}
            size={"autBtn"}
          >
            Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
}

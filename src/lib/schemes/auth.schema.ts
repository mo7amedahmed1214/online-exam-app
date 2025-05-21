import { z } from "zod";

//^ register schema
export const registerSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(1, "Username is required")
      .min(3, "Username must be at least 3 characters long")
      .max(50, "Username can't exceed 10 characters"),

    firstName: z
      .string({ required_error: "First name is required" })
      .min(1, "First name is required")
      .min(2, "First name must be at least 2 characters long")
      .max(50, "First name can't exceed 10 characters"),

    lastName: z
      .string({ required_error: "Last name is required" })
      .min(1, "Last name is required")
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name can't exceed 10 characters"),

    email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email({ message: "Invalid Email" }),

    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at latest 8 characters, containing 1 uppercase, 1 number ,1 specail charchter,1 lowercase"
      ),

    rePassword: z.string({ required_error: "rePassword is required" }).min(1, "rePassword is required"),

    phone: z
      .string({ required_error: "Phone is required" })
      .min(1, "Phone is required")
      .regex(/^(?:\+20|0)?1[0-2,5]{1}[0-9]{8}$/, "Must be egyption number phone"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type registerFields = z.infer<typeof registerSchema>;

//^ login schema
export const loginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email({ message: "Invalid Email" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must be at latest 8 characters, containing 1 uppercase, 1 number ,1 specail charchter,1 lowercase"
    ),
});

export type loginFieldes = z.infer<typeof loginSchema>;

//^ forget schema
export const forgetSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email({ message: "Invalid Email" }),
});

export type forgetFieldes = z.infer<typeof forgetSchema>;

//^ verify schema

export const verifySchema = z.object({
  resetCode: z.string({ required_error: "resetCode is required" }).min(1, "resetCode is required"),
});

export type verifyFieldes = z.infer<typeof verifySchema>;

//^ reset schema

export const resetPasswordSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email({ message: "Invalid Email" }),

  newPassword: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must be at latest 8 characters, containing 1 uppercase, 1 number ,1 specail charchter,1 lowercase"
    ),
});

export type resetPasswordFieldes = z.infer<typeof resetPasswordSchema>;

//^ set password schema

export const setPasswordSchema = z
  .object({
    oldPassword: z.string({ required_error: "Password is required" }).min(1, "Password is required"),

    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at latest 8 characters, containing 1 uppercase, 1 number ,1 specail charchter,1 lowercase"
      ),

    rePassword: z.string({ required_error: "rePassword is required" }).min(1, "rePassword is required"),
  })
  .refine(
    (value) =>
      value.password === value.rePassword || {
        message: "Confirm password must be same password",
        path: ["rePassword"],
      }
  );

export type setPasswordFieldes = z.infer<typeof setPasswordSchema>;

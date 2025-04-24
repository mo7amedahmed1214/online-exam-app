import { z } from "zod";

export const addQuestionSchema = z.object({
  question: z
    .string({ required_error: "Question is required" })
    .min(1, "Question is required"),


  A1: z
    .string({ required_error: "Answer is required" })
    .min(1, "Answer is required"),

  A2: z
    .string({ required_error: "Answer is required" })
    .min(1, "Answer is required"),

  A3: z
    .string({ required_error: "Answer is required" })
    .min(1, "Answer is required"),

  A4: z
    .string({ required_error: "Answer is required" })
    .min(1, "Answer is required"),

  correct: z
    .string({ required_error: "Corect is required" })
    .min(1, "Corect is required"),

  subject: z.string(),
  exam: z.string(),
});

export type addQuestionFields = z.infer<typeof addQuestionSchema>;

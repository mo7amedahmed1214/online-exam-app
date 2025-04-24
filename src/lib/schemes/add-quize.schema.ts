import { z } from "zod";

export const addQuizeSchema = z.object({
    title: z
    .string({ required_error: "Title is required" })
    .min(1, "Title is required"),

    numberOfQuestions: z
    .number({ required_error: "numberOfQuestions is required" })
    .min(1, "numberOfQuestions is required"),

    duration: z
    .number({ required_error: "Answer is required" })
    .min(1, "Answer is required"),


  subject: z.string(),
  
});

export type addQuizeFields = z.infer<typeof addQuizeSchema>;

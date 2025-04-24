import { z } from "zod";

export const QuizeSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      correct: z.string(),
    })
  ),
});
export type AnswerFields = z.infer<typeof QuizeSchema>;

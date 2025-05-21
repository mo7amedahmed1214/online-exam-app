import { z } from "zod";

export const addDiplomaSchema = z.object({
  icon: z.any(),

  name: z.string({ required_error: "Name is required" }).min(1, "Name is required"),
});

export type addDiplomaFields = z.infer<typeof addDiplomaSchema>;

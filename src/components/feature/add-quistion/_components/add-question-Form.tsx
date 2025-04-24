"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { addQuestionFields, addQuestionSchema } from "@/lib/schemes/add-question.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddQuistion from "../_hooks/use-add-qusition";

// type Props
type AddQuistionFormProps = {
  quizeId: string;
  params: { subjectId: string };
};

export default function AddQuestionForm({ quizeId, params }: AddQuistionFormProps) {
  // varibles
  const { subjectId } = params;

  // mutiation
  const { addQuetion, isPending, } = useAddQuistion();

  // form
  const form = useForm<addQuestionFields>({
    defaultValues: {
      question: "",
      A1: "",
      A2: "",
      A3: "",
      A4: "",
      correct: "",
      exam: quizeId,
      subject: subjectId,
    },

    resolver: zodResolver(addQuestionSchema),
  });

  // function
  const onSubmit: SubmitHandler<addQuestionFields> = async (values) => {
    console.log(values);
    addQuetion(values);
  };

  return (
    <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 ">
        {/* quistion */}
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel className="font-semibold text-md text-[#717579]">Add question </FormLabel>

              {/* field */}
              <FormControl>
                <Input
                  placeholder=""
                  className="form-control h-10  rounded-2xl w-full"
                  {...field}
                />
              </FormControl>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* frist answer */}
        <FormField
          control={form.control}
          name="A1"
          render={({ field }) => (
            <FormItem>
              {/* label */}
              <FormLabel className="font-semibold text-md text-[#717579]">Add Answer 1</FormLabel>

              {/* field */}
              <FormControl>
                <Input
                  placeholder=""
                  className="form-control h-10  rounded-2xl w-full"
                  {...field}
                />
              </FormControl>

              {/* feadback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* secuond answer */}
        <FormField
          control={form.control}
          name="A2"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel className="font-semibold text-md text-[#717579]">Add Answer 2</FormLabel>

              {/* field */}
              <FormControl>
                <Input
                  placeholder=""
                  className="form-control h-10  rounded-2xl w-full"
                  {...field}
                />
              </FormControl>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 3 answer */}
        <FormField
          control={form.control}
          name="A3"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel className="font-semibold text-md text-[#717579]">Add Answer 3</FormLabel>

              {/* field */}
              <FormControl>
                <Input
                  placeholder=""
                  className="form-control h-10  rounded-2xl w-full"
                  {...field}
                />
              </FormControl>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 4 answer */}
        <FormField
          control={form.control}
          name="A4"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel className="font-semibold text-md text-[#717579]">Add Answer 4</FormLabel>

              {/* field */}
              <FormControl>
                <Input
                  placeholder=""
                  className="form-control h-10  rounded-2xl w-full"
                  {...field}
                />
              </FormControl>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* correct */}
        <FormField
          control={form.control}
          name="correct"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel>Correct</FormLabel>

              {/* select */}
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  {/* btn=> open */}
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>

                {/* options */}
                <SelectContent className="z-[200]">
                  <SelectItem value="A1">A1</SelectItem>
                  <SelectItem value="A2">A2</SelectItem>
                  <SelectItem value="A3">A3</SelectItem>
                  <SelectItem value="A4">A4</SelectItem>
                </SelectContent>
              </Select>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* footer */}
        <footer className="flex justify-between w-full relative top-4">
          {/* btn => close */}
          <DialogClose asChild>
            <Button
              type="button"
              className="py-1 px-6 rounded-xl bg-white hover:bg-slate-100 text-main border border-main text-sm font-medium"
            >
              Back
            </Button>
          </DialogClose>

          {/* btn =>rest form */}
          <Button
            type="button"
            disabled={isPending || (form.formState.isSubmitting && !form.formState.isValid)}
            onClick={() => form.reset()}
            className="py-1 px-14 rounded-xl bg-main text-md font-bold"
          >
            Add Another question
          </Button>

          {/* btn=>submit */}
          <Button
            disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
            type="submit"
            className="py-1 px-14 rounded-xl bg-main text-md font-bold"
          >
            Done
          </Button>
        </footer>
      </form>
    </Form>
  );
}

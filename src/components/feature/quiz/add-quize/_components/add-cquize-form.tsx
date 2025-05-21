import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { addQuizeFields } from "@/lib/schemes/add-quize.schema";

export default function AddQuizeForm() {
  // form
  const form = useForm<addQuizeFields>({});

  return (
    <Form {...form}>
      <form action="" className="flex items-center flex-wrap justify-between">
        {/* title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel className="font-semibold text-md text-[#717579]">Diploma Name</FormLabel>

              {/* field */}
              <FormControl>
                <Input placeholder="" className="form-control h-10 w-56 rounded-2xl" {...field} />
              </FormControl>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* time */}
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel className="font-semibold text-md text-[#717579]">Time</FormLabel>

              {/* field */}
              <FormControl>
                <Input
                  placeholder=""
                  type="text"
                  className="rounded-full h-10 w-12 form-control"
                  {...field}
                />
              </FormControl>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* number */}
        <FormField
          control={form.control}
          name="numberOfQuestions"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel className="font-semibold text-md text-[#717579]">
                Number Of Questions
              </FormLabel>

              {/* field */}
              <FormControl>
                <Input placeholder="" className="form-control h-10 w-56 rounded-2xl" {...field} />
              </FormControl>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* footer */}
        <footer className="flex justify-between w-full mt-10">
          {/* btn=>colse */}
          <DialogClose asChild>
            <Button className="py-1 px-6 rounded-xl bg-white hover:bg-slate-100 text-main border border-main text-sm font-medium">
              Back
            </Button>
          </DialogClose>

          {/* btn =>submit */}
          <Button className="py-1 px-14 rounded-xl bg-main text-md font-bold">ADD</Button>
        </footer>
      </form>
    </Form>
  );
}

import React, { useRef } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { addDiplomaFields, addDiplomaSchema } from "@/lib/schemes/add-diploma.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddDiploma from "../_hooks/use-add-diploma";
import { object } from "zod";

export default function AddDiplomaForm() {
  // hook
  const formRef = useRef<HTMLFormElement>(null);

  // form
  const form = useForm<addDiplomaFields>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(addDiplomaSchema),
  });

  // mutation
  const { isPending, addDiploma } = useAddDiploma();

  //function
  const onSubmit: SubmitHandler<addDiplomaFields> = async (data) => {
    // varible
    const formData = new FormData(formRef.current || undefined);
    console.log(Object.fromEntries(formData));

    addDiploma(formData);
  };

  return (
    <Form {...form}>
      <form
        action=""
        onSubmit={form.handleSubmit(onSubmit)}
        ref={formRef}
        className="flex items-center flex-wrap justify-between"
      >
        {/* icon field */}
        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              {/* lable */}
              <FormLabel className="font-semibold text-md text-[#717579]">Add Photo</FormLabel>

              {/* field */}
              <FormControl>
                <Input
                  placeholder="+"
                  type="file"
                  className="form-control h-10 w-56 rounded-2xl"
                  {...field}
                />
              </FormControl>

              {/* feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* name */}
        <FormField
          control={form.control}
          name="name"
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

        {/* footer */}
        <footer className="flex justify-between w-full mt-10">
          {/* btn back =>close Dilog */}
          <DialogClose asChild>
            <Button className="py-1 px-6 rounded-xl bg-white hover:bg-slate-100 text-main border border-main text-sm font-medium">
              Back
            </Button>
          </DialogClose>

          {/* add btn */}
          <Button type="submit" className="py-1 px-14 rounded-xl bg-main text-md font-bold">
            ADD
          </Button>
        </footer>
      </form>
    </Form>
  );
}

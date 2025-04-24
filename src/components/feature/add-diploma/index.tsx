import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import AddDiplomaForm from "./_components/add-diploma-form";

export default function AddDeploma() {
  return (
    <Dialog>
      {/* btn open dilog */}
      <DialogTrigger asChild>
        <Button variant={"searchBtn"} size={"searchBtn"}>
          Add Deploma
        </Button>
      </DialogTrigger>

      {/* content */}
      <DialogContent className="max-w-720 w-full p-6 flex flex-col gap-10 rounded-20">
        {/* header */}
        <DialogHeader>
          {/* title */}
          <DialogTitle className="text-2xl font-bold text-main">
            {" "}
            <IoArrowBackCircleOutline className="inline-block text-3xl mr-2" />
            Add Deploma
          </DialogTitle>

          {/* discription */}
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        {/* body =>form add */}
        <AddDiplomaForm />
      </DialogContent>
    </Dialog>
  );
}

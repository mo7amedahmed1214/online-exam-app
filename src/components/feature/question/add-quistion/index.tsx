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
import AddQuestionForm from "./_components/add-question-Form";

// type Props
type AddQuistionProps = {
  quizeId: string;
  params: { subjectId: string };
};

export default function AddQuistion({ quizeId, params }: AddQuistionProps) {
  return (
    <Dialog>
      {/* btn =>open dilog */}
      <DialogTrigger asChild>
        <Button variant={"startBtn"} size={"startBtn"}>
          Add Question
        </Button>
      </DialogTrigger>

      {/* content */}
      <DialogContent className="max-w-720 w-full p-6 pb-10 max-h-[95vh] overflow-auto  flex flex-col gap-5 rounded-20">
        {/* header */}
        <DialogHeader>
          {/* title */}
          <DialogTitle className="text-2xl font-bold text-main">
            {" "}
            <IoArrowBackCircleOutline className="inline-block text-3xl mr-2" />
            Add Question
          </DialogTitle>

          {/* discreption */}
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>

        {/* body ==>form add */}
        <AddQuestionForm quizeId={quizeId} params={params} />
      </DialogContent>
    </Dialog>
  );
}

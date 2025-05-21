import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { JSON_HEADER } from "@/lib/constants/api.constant";
import { handelToken } from "@/lib/utils/get-token";
import Link from "next/link";
import { Routes } from "@/lib/constants/app.constant";
import FormQuistion from "./quize-card/_components/form-quistion";

// type props
type QuizeCardProps = {
  quizeId: string;
};

export async function QuizeCard({ quizeId }: QuizeCardProps) {
  // fetch
  const respons = await fetch(`${process.env.API}/questions?exam=${quizeId}`, {
    method: "GET",
    headers: {
      ...JSON_HEADER,
      ...(await handelToken()),
    },
  });

  const payload: ApiResponse<{ questions: Question[] }> = await respons.json();

  // handle error
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return (
    <AlertDialog>
      {/* button open dialog */}
      <AlertDialogTrigger asChild>
        <Button variant={"startBtn"} size={"startBtn"}>
          Start
        </Button>
      </AlertDialogTrigger>

      {/* content */}
      <AlertDialogContent className="max-w-686 w-full p-6 rounded-20">
        {/* header */}
        <AlertDialogHeader className="sr-only">
          {/* tiitle */}
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          {/* discription */}
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* body */}
        {/* handle if found quistion or not */}
        {payload.questions.length === 0 ? (
          // if quistions =0 close dilog
          <div className="py-7 px-4 bg-slate-100 rounded-2xl flex justify-center items-center flex-col gap-4 ">
            {/* sory */}
            <p className="text-center">
              OOps! No questions of this exam, Starting selecting exams now by clicking the button below and find something you love!
            </p>

            {/* colse dilog */}
            <AlertDialogCancel asChild>
              <Link
                className="btn bg-main  hover:bg-blue-500 hover:text-white  text-white p-2 rounded-md transition-colors duration-300"
                href={`${Routes.ROOT}`}>
                Back To Subjects
              </Link>
            </AlertDialogCancel>
          </div>
        ) : (
          // if fount qustion =>show quistion
          <FormQuistion quistions={payload.questions} />
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}

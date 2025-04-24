import React, { Suspense } from "react";
import Link from "next/link";
import { Routes } from "@/lib/constants/emuns.constant";
import QuizeSkeleton from "@/components/skeleton/quize.skeleton";
import QuizeItem from "./_components/quize-item";
import Client from "@/components/common/client";

// type props
type QuizesOfSubjectProps = {
  quize: Quiz[];
  searchParams: { search: string };
  params: { subjectId: string };
};

export default function QuizesOfSubject({ quize, params }: QuizesOfSubjectProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* title */}
      <h4 className="font-medium  text-lg">{quize.length > 0 ? quize[0].title : ""}</h4>

      {/* quizes */}
      {/* condtion if on exams of this subject  */}
      {quize.length === 0 ? (
        // alert=> if no exam
        <div className="py-7 px-4 bg-slate-100 rounded-2xl flex justify-center items-center flex-col gap-4 ">
          {/* sory */}
          <p className="text-center">
            OOps! No exam of this subject, Starting selecting exams now by clicking the button below
            and find something you love!
          </p>

          {/* close */}
          <Link
            className="btn bg-main  hover:bg-blue-700  text-white p-2 rounded-md transition-colors duration-300"
            href={`${Routes.ROOT}`}
          >
            Back To Subjects
          </Link>
        </div>
      ) : (
        // if found exams => show them
        quize.map((quize) => (
          <Suspense fallback={<QuizeSkeleton />} key={quize._id}>
            <QuizeItem key={quize._id} quizeInfo={quize} params={params}/>
          </Suspense>
        ))
      )}

      {/* client for use the context  */}
      <Client params={params}/>
    </div>
  );
}

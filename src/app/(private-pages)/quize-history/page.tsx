import React, { Suspense } from "react";
import { JSON_HEADER } from "@/lib/constants/api.constant";
import { handelToken } from "@/lib/utils/get-token";
import HistoryItem from "./_components/history-item";
import Link from "next/link";
import { Routes } from "@/lib/constants/app.constant";
import QuizeSkeleton from "@/components/skeleton/quize.skeleton";
import { Metadata } from "next";

export default async function Page() {
  // varible
  let exam: ApiResponse<{ exam: Quiz }> | null = null;

  // fetch history
  const respons = await fetch(`${process.env.API}/questions/history`, {
    method: "GET",
    headers: {
      ...JSON_HEADER,
      ...(await handelToken()),
    },
  });

  const payload: ApiResponse<{ history: HistoryType }> = await respons.json();
  if ("code" in payload) throw new Error(payload.message);

  // handle if found history => get exam information
  if (payload.history) {
    const respons = await fetch(`${process.env.API}/exams/${payload.history.QID.exam}`, {
      method: "GET",
      headers: {
        ...JSON_HEADER,
        ...(await handelToken()),
      },
    });
    exam = await respons.json();
    if ("code" in exam!) throw new Error(exam.message);
  }
  console.log(exam);

  return !exam ? (
    // alert=> if no no History of user
    <div className="py-7 px-4 bg-slate-100 rounded-2xl flex justify-center items-center flex-col gap-4 ">
      {/* sory */}
      <p className="text-center">
        OOps! No history for You, Starting selecting exams now and answer questions by clicking the button below and find something you
        love!
      </p>

      {/* close */}
      <Link className="btn bg-main  hover:bg-blue-700  text-white p-2 rounded-md transition-colors duration-300" href={`${Routes.ROOT}`}>
        Back To Subjects
      </Link>
    </div>
  ) : (
    // if found History
    <div className="space-y-10">
      <div className="flex flex-col gap-6">
        {/* title */}
        <h4 className="font-medium  text-lg">{exam?.exam.title}</h4>

        {/* history item */}
        <Suspense fallback={<QuizeSkeleton />}>
          <HistoryItem exam={exam?.exam} history={payload.history} />
        </Suspense>
      </div>
    </div>
  );
}

// metadata
export const metadata: Metadata = {
  title: "History Page",
  description: "this is the page of user history",
};

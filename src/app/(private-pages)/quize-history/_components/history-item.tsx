import Image from "next/image";
import Re from "@assets/images/download.png";
import { HistoryAnswer } from "./history-answer";
// type
type HistoryItemProps = {
  exam: Quiz;
  history: HistoryType;
};

export default function HistoryItem({ exam, history }: HistoryItemProps) {
  return (
    <div className="w-full  shadow-comShadow rounded-10 py-3 px-6 bg-bgComp flex flex-col  sm:flex-row  gap-4">
      {/* logo */}
      <div className="relative w-full h-64 sm:w-70 sm:h-70 ">
        <Image src={Re} fill alt="this logo of exam" sizes="100%" />
      </div>

      {/* information */}
      <div className=" w-full space-y-2">
        {/* informatin */}
        <div className=" w-full flex justify-between">
          <div>
            {/* title */}
            <h5 className="font-medium text-xl  sm:text-md text-black">{exam.title}</h5>

            {/* number of quistions */}
            <p className="text-md sm:text-13 text-textSub"> {exam.numberOfQuestions} Quistions</p>
          </div>

          {/* time */}
          <p className="text-md sm:text-sm"> {exam.duration} Minutes</p>
        </div>

        {/*  */}
        <div className="flex justify-between items-baseline">
          <p className="text-12 font-semibold text-main">answered</p>

          <HistoryAnswer history={history} />
        </div>
      </div>
    </div>
  );
}

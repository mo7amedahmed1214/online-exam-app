import { QuizeAnswer } from "@/app/(private-pages)/select-quize/_components/quize-card/_components/quize-answer";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";

// type Props
type QuizeResultProps = {
  quistions: Question[];
  data: SuccessfullyResponse<QuizResult> | undefined;
};
export default function QuizeResult({ data, quistions }: QuizeResultProps) {
  return (
    <section className="w-full flex flex-col gap-12">
      {/* header */}
      <h3 className="text-2xl font-medium">Your Score</h3>

      {/* content */}
      <div className="w-full flex items-center justify-center gap-20">
        {/*  score */}
        <div className="border-black border-8 flex justify-center items-center py-12  px-11 rounded-[80px] ">
          <p>{parseFloat(data?.total!).toFixed(0)}%</p>
        </div>

        {/*information  */}
        <div className="flex flex-col gap-3">
          {/* correct */}
          <div className="flex justify-between items-center">
            <p className="text-2xl font-medium text-[#02369C]">Correct </p>

            {/* number of coorect */}
            <span className="size-8 p-1 rounded-full text-center font-medium  border text-[#02369C] text-md border-[#02369C] ">
              {data?.correct}
            </span>
          </div>

          {/* wrong */}
          <div className="flex justify-between items-center  gap-5">
            <p className="text-2xl font-medium text-[#CC1010]">Incorrect </p>

            {/* number of worng */}
            <span className="size-8 p-1 rounded-full text-center font-medium  text-[#CC1010] border text-md border-[#CC1010] ">
              {data?.wrong}
            </span>
          </div>
        </div>
      </div>

      {/*  */}
      <footer className="flex gap-5">
        <AlertDialogCancel className="bg-white text-2xl py-7 mt-1 px-6 !rounded-100  w-full border  text-main border-main font-medium  disabled:text-textSub disabled:bg-[#1D1B201F] transition-all duration-300 hover:bg-slate-100 hover:text-main ">
          Close
        </AlertDialogCancel>

        {/* show result button */}
        <QuizeAnswer data={data} quistions={quistions} />
      </footer>
    </section>
  );
}

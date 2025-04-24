import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@radix-ui/react-radio-group";

// type Props
// type Props
type HistoryAnswerProps = {
  history: HistoryType;
};

export function HistoryAnswer({ history }: HistoryAnswerProps) {
  return (
    <Dialog>
      {/* button open dilog */}
      <DialogTrigger asChild>
        <Button size={"answeBtn"} variant={"answerBtn"}>
          answers
        </Button>
      </DialogTrigger>

      {/* content */}
      <DialogContent className="max-w-686  w-full max-h-590  h-full  overflow-y-auto grid-cols-1  grid  p-6 gap-8  shadow-dilogShadow">
        {/* header */}
        <DialogHeader className="sr-only">
          {/* title */}
          <DialogTitle>Are you absolutely sure?</DialogTitle>

          {/* discription */}
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>

        {/* quiz information */}
        <div className="space-y-4 w-full bg-inputBg py-4 px-2 shadow-[0px_0px_8px_0px_rgba(42,41,41,0.25)] rounded-10">
          {/* qustion */}
          <h5 className="text-2xl text-black font-medium">{history.QID.question}</h5>

          {/* answers */}
          <RadioGroup defaultValue="comfortable" className="space-y-3">
            {history.QID.answers.map((answer) => (
              <div
                key={answer.key}
                className={`flex items-center space-x-2 rounded-10 py-4 h-70 px-5 bg-qusColor ${
                  answer.key === history.QID.correct 
                    ? "text-timeColor border border-timeColor bg-trueBg"
                    : answer.key === history.chosenAnswer && answer.key !== history.QID.correct
                      ? "text-falseBorder border border-falseBorder !bg-falseBg"
                      : ""
                } `}
              >
                {/* anwser key  */}
                <RadioGroupItem
                  value={answer.key}
                  id={answer.key}
                  checked={history.chosenAnswer === answer.key}
                  className={`${answer.key === history.QID.correct ? "border-timeColor text-timeColor " : answer.key !== history.QID.correct && answer.key === history.chosenAnswer ? "border-falseBorder text-falseBorder" : ""}`}
                />

                {/* answer name  */}
                <Label className=" line-clamp-2" htmlFor={answer.key}>
                  {answer.answer}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        {/* close button */}
        <DialogClose asChild>
          <Button type="button" className="w-full px-6 py-2 h-fit !rounded-100 mt-auto">
            close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

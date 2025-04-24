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
type QuizeAnswerProps = {
  quistions: Question[];
  data: SuccessfullyResponse<QuizResult> | undefined;
};

export function QuizeAnswer({ data, quistions }: QuizeAnswerProps) {
  return (
    <Dialog>
      {/* button open dilog */}
      <DialogTrigger asChild>
        <Button size={"backBtn"} variant={"nexttBtn"}>
          Show Result
        </Button>
      </DialogTrigger>

      {/* content */}
      <DialogContent className="max-w-776  w-full max-h-690  h-full  overflow-y-auto grid-cols-1  grid md:grid-cols-2 p-6 gap-8  shadow-dilogShadow">
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

        {/* condtion if user can answer any quistions or not befor time finish   */}
        {data?.WrongQuestions.length === 0 && data.correctQuestions.length === 0 ? (
          // alert => if user cannot answer any quition
          <div className="w-full h-full flex items-center justify-center bg-slate-100">
            <p>
          
              OOps! the time ran out before you could answer any questions. You can try again and
              aim for a better result!
            </p>
          </div>
        ) : (
          // show  answers of qustions if user can answer any quiton
          quistions.map((quistion) => {
            // varibles
            let wrongQeis = null;
            let correQuis = null;

            // condtion if found any wrong quistions
            if (data?.WrongQuestions) {
              data.WrongQuestions.map((wQ) => {
                // condtion to filter wrong quistions that user can anwer this from all question
                if (quistion._id === wQ?.QID) {
                  wrongQeis = (
                    <div
                      key={quistion._id}
                      className="space-y-4 w-full bg-inputBg py-4 px-2 shadow-[0px_0px_8px_0px_rgba(42,41,41,0.25)] rounded-10"
                    >
                      {/* qustion */}
                      <h5 className="text-2xl text-black font-medium">{quistion.question}</h5>

                      {/* answers */}
                      <RadioGroup defaultValue="comfortable" className="space-y-3">
                        {quistion.answers.map((answer) => (
                          <div
                            key={answer.key}
                            className={`flex items-center space-x-2 rounded-10 py-4 h-70 px-5 ${
                              wQ.inCorrectAnswer === answer.key
                                ? "border border-falseBorder bg-falseBg"
                                : wQ.correctAnswer === answer.key
                                  ? "border border-timeColor bg-trueBg"
                                  : "bg-qusColor"
                            }`}
                          >
                            {/* anwser key  */}
                            <RadioGroupItem
                              value={answer.key}
                              id={answer.key}
                              checked={wQ.inCorrectAnswer === answer.key}
                              className={`${wQ.inCorrectAnswer === answer.key ? "text-falseBorder border-falseBorder" : wQ.correctAnswer === answer.key ? "border-timeColor " : ""}`}
                            />

                            {/* answer name  */}
                            <Label className=" line-clamp-2" htmlFor={answer.key}>
                              {answer.answer}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  );
                }
              });
            }

            // condtion if found any correct quistions
            if (data?.correctQuestions) {
              data.correctQuestions.map((cQ) => {
                // condtion to filter correct quistions that user can anwer this from all question
                if (quistion._id === cQ.QID) {
                  correQuis = (
                    <div
                      key={quistion._id}
                      className="space-y-4 w-full bg-inputBg py-4 px-2 shadow-[0px_0px_8px_0px_rgba(42,41,41,0.25)] rounded-10"
                    >
                      {/* quistion */}
                      <h5 className="text-2xl text-black font-medium">{quistion.question}</h5>

                      {/* answers */}
                      <RadioGroup defaultValue="comfortable" className="space-y-3">
                        {quistion.answers.map((answer) => (
                          <div
                            key={answer.key}
                            className={`flex items-center space-x-2 rounded-10 py-4 h-70 px-5 ${
                              cQ.correctAnswer === answer.key
                                ? "border border-timeColor bg-trueBg"
                                : "bg-qusColor"
                            }`}
                          >
                            <RadioGroupItem
                              value={answer.key}
                              id={answer.key}
                              checked={cQ.correctAnswer === answer.key}
                              className={`${cQ.correctAnswer === answer.key ? "text-timeColor border-timeColor" : ""}`}
                            />
                            <Label className=" line-clamp-2" htmlFor={answer.key}>
                              {answer.answer}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  );
                }
              });
            }

            return wrongQeis || correQuis;
          })
        )}

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

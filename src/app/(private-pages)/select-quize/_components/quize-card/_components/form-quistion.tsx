"use client";
import React, {  useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SubmitHandler, useForm } from "react-hook-form";
import { AnswerFields, QuizeSchema } from "@/lib/schemes/quize.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useQuistion from "../../../_hooks/use-quistion";
import QuizeResult from "./quize-result";
import QuizeTitle from "./quize-title";

// type Props
type FormQuistionProps = {
  quistions: Question[];
};

export default function FormQuistion({ quistions }: FormQuistionProps) {
  // state
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");

  // mutation
  const { isPending, error, submitQuize, data } = useQuistion();

  // variable
  let currentQuistion = quistions[step];

  // form
  const form = useForm<AnswerFields>({
    defaultValues: {
      answers: quistions.map(() => ({ correct: "", quistionId: "" })),
    },

    resolver: zodResolver(QuizeSchema),
  });

  // function
  const onSubmit: SubmitHandler<AnswerFields> = (values) => {
    // filter quistion that answer form all quistion to send them to api
    const filteredAnswers = values.answers.filter(
      (ans) => ans.correct !== "" && ans.questionId !== ""
    );

    submitQuize({ answers: filteredAnswers });
  };

  // condtion to handle if user submit form or not
  return data ? (
    // {/* // if user submit =>show result */}
    <QuizeResult data={data} quistions={quistions} />
  ) : (
    // if user not submit show => form quistion
    <section className="w-full  rounded-20 space-y-8">
      {/* header */}
      <header className="font-medium text-2xl">
        <QuizeTitle
          quistions={quistions}
          step={step}
          onTimerEnd={() => onSubmit(form.getValues())}
        />
      </header>

      {/*form Qustion  */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* content */}
          <FormField
            control={form.control}
            name={`answers.${step}`}
            render={({ field }) => (
              <FormItem className="space-y-6 w-full">
                {/* label */}
                <FormLabel className="text-2xl text-black font-medium">
                  {currentQuistion.question}
                </FormLabel>

                {/* field */}
                <FormControl>
                  {/* answers */}
                  <RadioGroup
                    name={currentQuistion._id}
                    className="space-y-4"
                    value={answer}
                    disabled={isPending}
                    onValueChange={(value) => {
                      setAnswer(value);
                      field.onChange({
                        correct: value,
                        questionId: currentQuistion._id,
                      });
                    }}
                  >
                    {currentQuistion.answers.map((answer) => (
                      <FormItem
                        key={answer.key}
                        className={`flex items-center space-x-2 rounded-10 w-full ${answer.key === form.watch(`answers.${step}.correct`) ? "bg-trueColor" : "bg-qusColor"}   h-70  px-5`}
                      >
                        {/* field */}
                        <FormControl>
                          <RadioGroupItem className="mt-2" value={answer.key} />
                        </FormControl>

                        {/* lable */}
                        <FormLabel className="grow py-4 text-xl font-[400] ">
                          {answer.answer}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>

                {/* feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* footer */}
          <footer className="w-full flex mt-10 gap-12 ">
            {/* back button */}
            <Button
              type="button"
              variant={"backtBtn"}
              size={"backBtn"}
              onClick={() => {
                const prevAnswer = form.getValues(`answers.${step - 1}`);

                // check if prevQuestion is answer or not
                prevAnswer?.correct ? setAnswer(prevAnswer.correct) : setAnswer("");

                setStep((prev) => prev - 1);
              }}
              disabled={step === 0 || isPending}
            >
              Back
            </Button>

            {/* next button */}
            <Button
              size={"backBtn"}
              variant={"nexttBtn"}
              onClick={() => {
                // if condtion is true not setAnswer
                if (step === quistions.length - 1) return;

                const nextAnswer = form.getValues(`answers.${step + 1}`);

                //check if next Quistion is answer or not
                !nextAnswer?.correct ? setAnswer("") : setAnswer(nextAnswer.correct);

                setStep((prev) => prev + 1);
              }}
              type={step < quistions.length - 1 ? "button" : "submit"}
              disabled={(() => {
                if (isPending) return true;

                const currenAnswer = form.getValues(`answers.${step}`);

                // handel if quistion  not answer cannot go to next qustion
                if (currenAnswer?.correct) return false;

                return true;
              })()}
            >
              Next
            </Button>
          </footer>
        </form>
      </Form>
    </section>
  );
}

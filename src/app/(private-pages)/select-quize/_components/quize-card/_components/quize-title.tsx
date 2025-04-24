"use client";
import React, { useEffect, useState } from "react";
import { FcAlarmClock } from "react-icons/fc";

//props type
type QuizeTitleProp = {
  quistions: Question[];
  step: number;
  onTimerEnd?: () => void;
};

export default function QuizeTitle({ quistions, step, onTimerEnd }: QuizeTitleProp) {
  // Variables
  const duration = quistions[0].exam.duration;

  // State
  const [date, setDate] = useState(new Date(0).setMinutes(duration));
  const [isTimeFinished, setIsTimeFinished] = useState(false);

  // Effect
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate((prev) => {
        // now time
        const currentDate = new Date(prev);

        // Check if the time is finish
        if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
          if (!isTimeFinished) {
            setIsTimeFinished(true);
            onTimerEnd?.();
          }

          // clear intervel
          window.clearInterval(timerId);

          // to stop timer
          return prev;
        }

        // chanege time by remove 1 scound
        return currentDate.setSeconds(currentDate.getSeconds() - 1);
      });
    }, 1000);

    // when destroyed
    return () => {
      // clear intervel
      window.clearInterval(timerId);
    };
  }, [, isTimeFinished]);

  return (
    <div className="w-full space-y-8">
      {/* infirmation of quize */}
      <div className="flex justify-between">
        {/* number of quistion */}
        <h5 className="font-roboto text-sm  font-medium  text-main">
          Question {step + 1} of {quistions.length}
        </h5>

        {/* timer */}
        <p className={`font-roboto text-xl  text-timeColor`}>
          <FcAlarmClock className="inline-block mr-1 text-2xl" />
          {Intl.DateTimeFormat("en-US", {
            minute: "2-digit",
            second: "2-digit",
          }).format(date)}
        </p>
      </div>

      {/* steps */}
      <ul className="flex flex-wrap gap-6">
        {quistions.map((quistion, i) => (
          <li
            key={quistion._id}
            className={`size-[10px] rounded-full ${step >= i ? "bg-main" : "bg-qusColor"}`}
          ></li>
        ))}
      </ul>
    </div>
  );
}

declare type HistoryType = {
  _id: string;
  checkAnswer: "correct" | "incorrect";
  QID: {
    _id: string;
    question: string;
    answers: Answer[]; // You can replace `any[]` with a more specific type if the answer objects are known
    type: "single_choice" | "multiple_choice" | string;
    correct: string;
    subject: string;
    exam: string;
    createdAt: string; // ISO date string
  };
  user: string;
  chosenAnswer: string;
  avgAnswerTime: string; // 'NaN' or a number string — consider using `string | number` if values vary
  createdAt: string; // ISO date string
};

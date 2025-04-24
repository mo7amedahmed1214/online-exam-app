declare type Answer = {
  answer: string;
  key: string;
};

declare type Question = {
  answers: Answer[];
  type: "single_choice"; // adjust if there are other types
  _id: string;
  question: string;
  correct: string;
  subject: Subject;
  exam: Quiz;
  createdAt: string;
};

declare type AddQuestion = {
  question: string;
  A1: string;
  A2: string;
  A3: string;
  A4: string;
  answers: string[];
  type: "single_choice";
  correct: "A1" | "A2" | "A3" | "A4"; // Correct answer can only be one of these
  subject: string;
  exam: string;
  _id: string;
  createdAt: string; // ISO date format
};

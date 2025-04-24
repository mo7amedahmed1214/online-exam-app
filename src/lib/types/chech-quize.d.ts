type QuizResult = {
    correct: number;
    wrong: number;
    total: string;
    WrongQuestions: {
      QID: string;
      Question: string;
      inCorrectAnswer: string;
      correctAnswer: string;
      answers: Record<string, unknown>;
    }[];
    correctQuestions: {
      QID: string;
      Question: string;
      inCorrectAnswer: string;
      correctAnswer: string;
      answers: Record<string, unknown>;
    }[];
  };
  
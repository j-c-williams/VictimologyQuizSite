export interface Answer {
  text: string;
  isCorrect: boolean; 
}

export interface Question {
  id: number;
  questionText: string;
  answers: Answer[];
  readTime: number;
  answerTime: number;
  pointValue: number; 
  source: string;
}
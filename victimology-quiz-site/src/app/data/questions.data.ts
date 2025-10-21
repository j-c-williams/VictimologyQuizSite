import { Question } from "../models/question.model";

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: "What percentage of survivors of non-physical abuse experience suicidal thoughts?",
    answers: [
      { text: "13%", isCorrect: false },
      { text: "38%", isCorrect: false },
      { text: "47%", isCorrect: true },
      { text: "66%", isCorrect: false }
    ],
    readTime: 6,
    answerTime: 20,
    pointValue: 100,
    source: "https://safelives.org.uk/news-views/domestic-abuse-and-suicide-figures/"
  },
  {
    id: 2,
    questionText: "What percentage of women will experience some form of contact sexual violence, physical violence, and/or stalking by an intimate partner in their lifetime in Utah?",
    answers: [
      { text: "21.2%", isCorrect: false },
      { text: "33.6%", isCorrect: true },
      { text: "45.8%", isCorrect: false },
      { text: "52.4%", isCorrect: false }
    ],
    readTime: 8,
    answerTime: 20,
    pointValue: 100,
    source: "https://www.usu.edu/uwlp/blog/2023/domestic-violence-among-utah-women-2023"
  },
  {
    id: 3,
    questionText: "What percentage of physical abusers also emotionally and psychologically abuse their victims?",
    answers: [
      { text: "34%", isCorrect: false },
      { text: "57%", isCorrect: false },
      { text: "68%", isCorrect: false },
      { text: "95%", isCorrect: true }
    ],
    readTime: 6,
    answerTime: 20,
    pointValue: 100,
    source: "https://dvcccpa.org/fast-facts-statistics/#:~:text=Nearly%20half%20of%20all%20women,psychologically%20abuse%20them%20(5)."
  }
]
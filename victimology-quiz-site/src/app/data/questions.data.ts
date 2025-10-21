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
  },
  {
    id: 4,
    questionText: "How many women experience partner emotional abuse after the age of 15?",
    answers: [
      {text: "1 in 2", isCorrect: false },
      {text: "1 in 4", isCorrect: true },
      {text: "1 in 6", isCorrect: false },
      {text: "1 in 8", isCorrect: false }
    ],
    readTime: 6,
    answerTime: 20,
    pointValue: 100,
    source: "https://www.abs.gov.au/articles/domestic-violence-experiences-partner-emotional-abuse"
  },
  {
    id: 5,
    questionText: "What is the most common form of abuse?",
    answers: [
      { text: "Emotional abuse", isCorrect: true },
      { text: "Physical abuse", isCorrect: false },
      { text: "Sexual abuse", isCorrect: false },
      { text: "Financial abuse", isCorrect: false }
    ],
    readTime: 6,
    answerTime: 20,
    pointValue: 100,
    source: "https://www.urmc.rochester.edu/encyclopedia/content?contentid=2990&contenttypeid=1#:~:text=It%20may%20consist%20of%20name,with%20your%20family%20and%20friends."
  },
  {
    id: 6,
    questionText: "What is \"gaslighting\"?",
    answers: [
      { text: "A form of physical abuse", isCorrect: false },
      { text: "A type of financial manipulation", isCorrect: false },
      { text: "A psychological tactic to make someone doubt their reality", isCorrect: true },
      { text: "A slang term for arson", isCorrect: false }
    ],
    readTime: 6,
    answerTime: 20,
    pointValue: 100,
    source: "https://www.safehorizon.org/safe-blog/5-signs-emotional-abuse/"
  },
  {
    id: 7,
    questionText: "What is true about emotional abuse?",
    answers: [
      { text: "It is not as damaging as physical abuse", isCorrect: false },
      { text: "It can be as damaging as physical abuse", isCorrect: true },
      { text: "It is more damaging than physical abuse", isCorrect: false }
    ],
    readTime: 6,
    answerTime: 20,
    pointValue: 100,
    source: "https://www.safehorizon.org/safe-blog/5-signs-emotional-abuse/"
  },
  {
    id: 8,
    questionText: "Controlling who your partner sees and talks to can be form of emotional abuse.",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false }
    ],
    readTime: 8,
    answerTime: 20,
    pointValue: 100,
    source: "https://www.safehorizon.org/safe-blog/5-signs-emotional-abuse/"
  },
  {
    id: 9,
    questionText: "Emotional abuse is easy to recognize.",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true }
    ],
    readTime: 6,
    answerTime: 20,
    pointValue: 100,
    source: "https://www.safehorizon.org/safe-blog/5-signs-emotional-abuse/"
  },
  {
    id: 10,
    questionText: "What percentage of intimate partner violence survivors with children report that the perpetrator used their children to manipulate and control them?",
    answers: [
      { text: "25%", isCorrect: false },
      { text: "55%", isCorrect: false },
      { text: "70%", isCorrect: false },
      { text: "85%", isCorrect: true }
    ],
    readTime: 8,
    answerTime: 20,
    pointValue: 100,
    source: "https://safelives.org.uk/about-domestic-abuse/what-is-domestic-abuse/psychological-abuse/"
  },
  {
    id: 11,
    questionText: "Emotional abuse is always with an intimate partner.",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true }
    ],
    readTime: 6,
    answerTime: 20,
    pointValue: 100,
    source: "https://www.medicalnewstoday.com/articles/327080#types"
  },
  {
    id: 12,
    questionText: "Engaging in a course of conduct directed at a specific person that would cause a reasonable person to feel fear for their safety or the safety of others or suffer substantial emotional distress is known as what?",
    answers: [
      { text: "Harassment", isCorrect: false },
      { text: "Stalking", isCorrect: true },
      { text: "Bullying", isCorrect: false },
      { text: "Intimidation", isCorrect: false }
    ],
    readTime: 10,
    answerTime: 20,
    pointValue: 100,
    source: "https://titleix.gwu.edu/understanding-stalking-recognizing-signs-and-seeking-support#:~:text=Stalking%20means%20engaging%20in%20a,or%20suffer%20substantial%20emotional%20distress."
  },
  {
    id: 13,
    questionText: "During emotional abuse, the Amygdala, the part of the brain that processes emotions, enters hyperactivity.",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false }
    ],
    readTime: 8,
    answerTime: 20,
    pointValue: 100,
    source: "https://illinoisrecoverycenter.com/effects-of-emotional-abuse-on-the-brain/"
  },
  {
    id: 14,
    questionText: "How many women in Utah are estimated to suffer emotional abuse every year?",
    answers: [
      { text: "54,000", isCorrect: false },
      { text: "128,000", isCorrect: false },
      { text: "194,000", isCorrect: true },
      { text: "256,000", isCorrect: false }
    ],
    readTime: 8,
    answerTime: 20,
    pointValue: 100,
    source: "https://uwhr.utah.edu/domestic-violence/#:~:text=behalf%20%5B2%5D.-,Utah%20Data,Figure%202)%20%5B4%5D."
  },
  {
    id: 15,
    questionText: "What percentage of Utah adults report emotional abuse from childhood?",
    answers: [
      { text: "12.5%", isCorrect: false },
      { text: "18.3%", isCorrect: false },
      { text: "24.7%", isCorrect: false },
      { text: "36.9%", isCorrect: true }
    ],
    readTime: 8,
    answerTime: 20,
    pointValue: 100,
    source: "https://vipp.utah.gov/wp-content/uploads/ACEs-Report-2020.pdf"
  }
]
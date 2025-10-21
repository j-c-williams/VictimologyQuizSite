import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Question } from "../models/question.model";
import { QUIZ_QUESTIONS } from "../data/questions.data";

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  timeRemaining: number;
  isReading: boolean;
  hasAnswered: boolean;
  isComplete: boolean;
  correctAnswers: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = QUIZ_QUESTIONS;

  private quizState: QuizState = {
    currentQuestionIndex: 0,
    score: 0,
    timeRemaining: 0,
    isReading: true,
    hasAnswered: false,
    isComplete: false,
    correctAnswers: 0
  };

  private quizState$ = new BehaviorSubject<QuizState>(this.quizState);
  
  constructor() { }

  getQuizState(): Observable<QuizState> {
    return this.quizState$.asObservable();
  }

  getCurrentQuestion(): Question | null {
    if (this.quizState.currentQuestionIndex < this.questions.length) {
      return this.questions[this.quizState.currentQuestionIndex];
    }
    return null;
  }

  startQuiz(): void {
    this.quizState = {
      currentQuestionIndex: 0,
      score: 0,
      timeRemaining: this.questions[0].readTime,
      isReading: true,
      hasAnswered: false,
      isComplete: false,
      correctAnswers: 0
    };
    this.quizState$.next(this.quizState);
  }

  submitAnswer(answerIndex: number): void {
    const currentQuestion = this.getCurrentQuestion();
    if (!currentQuestion || this.quizState.hasAnswered) return;

    const isCorrect = currentQuestion.answers[answerIndex].isCorrect;
    if (isCorrect) {
      this.quizState.correctAnswers++;
      const timeBonus = this.quizState.timeRemaining / currentQuestion.answerTime;
      const pointsEarned = Math.round(currentQuestion.pointValue * (1 + timeBonus));
      this.quizState.score += pointsEarned;
    }

    this.quizState.hasAnswered = true;
    this.quizState$.next(this.quizState);
  }

  nextQuestion(): void {
    this.quizState.currentQuestionIndex++;

    if (this.quizState.currentQuestionIndex >= this.questions.length) {
      this.quizState.isComplete = true;
    } else {
      const nextQuestion = this.getCurrentQuestion();
      this.quizState.timeRemaining = nextQuestion!.readTime;
      this.quizState.isReading = true;
      this.quizState.hasAnswered = false;
    }

    this.quizState$.next(this.quizState);
  }

  startAnsweringPhase(): void {
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion) {
      this.quizState.isReading = false;
      this.quizState.timeRemaining = currentQuestion.answerTime;
      this.quizState$.next(this.quizState); 
    }
  }

  updateTimer(): void {
    if (this.quizState.timeRemaining > 0) {
      this.quizState.timeRemaining--;
      this.quizState$.next(this.quizState);
    }
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }

  getAllSources(): string[] {
    const sources = this.questions.map(q => q.source).filter((source): source is string => source !== undefined && source !== '');
    return [...new Set(sources)];
  }

  resetQuiz(): void {
    this.startQuiz();
  }
}
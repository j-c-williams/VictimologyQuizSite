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
    isComplete: false
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
      isComplete: false
    };
    this.quizState$.next(this.quizState);
  }

  submitAnswer(answerIndex: number): void {
    const currentQuestion = this.getCurrentQuestion();
    if (!currentQuestion || this.quizState.hasAnswered) return;

    const isCorrect = currentQuestion.answers[answerIndex].isCorrect;
    if (isCorrect) {
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

  resetQuiz(): void {
    this.startQuiz();
  }
}
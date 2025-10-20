import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { QuizService, QuizState } from '../services/quiz.service';
import { Question } from '../models/question.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  quizState: QuizState | null = null;
  currentQuestion: Question | null = null;
  totalQuestions: number = 0;
  selectedAnswerIndex: number | null = null;
  
  private stateSubscription?: Subscription;
  private timerSubscription?: Subscription;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizService.startQuiz();
    this.totalQuestions = this.quizService.getTotalQuestions();

    this.stateSubscription = this.quizService.getQuizState().subscribe(state => {
      this.quizState = state;
      this.currentQuestion = this.quizService.getCurrentQuestion();

      if (state.timeRemaining === 0 && state.isReading) {
        this.quizService.startAnsweringPhase();
      } else if (state.timeRemaining === 0 && !state.isReading && !state.hasAnswered) {
        setTimeout(() => this.nextQuestion(), 1500);
      }

      if (state.isComplete) {
        this.navigateToResults();
      }
    });

    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.quizState && !this.quizState.isComplete) {
        this.quizService.updateTimer();
      }
    });
  }

  ngOnDestroy(): void {
    this.stateSubscription?.unsubscribe();
    this.timerSubscription?.unsubscribe();
  }

  selectAnswer(index: number): void {
    if (!this.quizState?.isReading && !this.quizState?.hasAnswered) {
      this.selectedAnswerIndex = index;
      this.quizService.submitAnswer(index);
      
      // Auto advance after showing result
      setTimeout(() => this.nextQuestion(), 2000);
    }
  }

  nextQuestion(): void {
    this.selectedAnswerIndex = null;
    this.quizService.nextQuestion();
  }

  navigateToResults(): void {
    setTimeout(() => {
      alert(`Quiz Complete! Your score: ${this.quizState?.score}`);
      this.router.navigate(['/results']);
    }, 1000);
  }

  getAnswerClass(index: number): string {
    if (!this.quizState?.hasAnswered) {
      return '';
    }

    const isSelected = this.selectedAnswerIndex === index;
    const isCorrect = this.currentQuestion?.answers[index].isCorrect;

    if (isSelected && isCorrect) {
      return 'correct';
    } else if (isSelected && !isCorrect) {
      return 'incorrect';
    } else if (isCorrect) {
      return 'correct';
    }
    
    return '';
  }

  isAnswerDisabled(): boolean {
    return this.quizState?.isReading || this.quizState?.hasAnswered || false;
  }
}
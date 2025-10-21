import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizService, QuizState } from '../services/quiz.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  score: number = 0;
  correctAnswers: number = 0;
  totalQuestions: number = 0;
  sources: string[] = [];
  percentageCorrect: number = 0;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get final quiz state
    this.quizService.getQuizState().subscribe(state => {
      this.score = state.score;
      this.correctAnswers = state.correctAnswers;
    });

    this.totalQuestions = this.quizService.getTotalQuestions();
    this.sources = this.quizService.getAllSources();
    this.percentageCorrect = Math.round((this.correctAnswers / this.totalQuestions) * 100);
  }

  retakeQuiz(): void {
    this.quizService.resetQuiz();
    this.router.navigate(['/quiz']);
  }

  goToLanding(): void {
    this.router.navigate(['/landing']);
  }

  getScoreMessage(): string {
    if (this.percentageCorrect === 100) {
      return 'Perfect Score!';
    } else if (this.percentageCorrect >= 80) {
      return 'Excellent Work!';
    } else if (this.percentageCorrect >= 60) {
      return 'Good Job!';
    } else if (this.percentageCorrect >= 40) {
      return 'Keep Learning!';
    } else {
      return 'Room to Grow!';
    }
  }

  getScoreColor(): string {
    if (this.percentageCorrect >= 80) {
      return 'excellent';
    } else if (this.percentageCorrect >= 60) {
      return 'good';
    } else {
      return 'needs-improvement';
    }
  }
}
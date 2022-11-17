import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {QuestionService} from '../../services/question.service';
import {Question} from "../../models/question";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public name: string = "";
  public questionList: Question[] = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: Subscription = Subscription.EMPTY;
  progress: string = "0";
  isTestCompleted: boolean = false;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(res => {
        this.questionList = res;
      })
  }

  nextQuestion(): void {
    this.currentQuestion++;
  }

  previousQuestion(): void {
    this.currentQuestion--;
  }

  answerQuestion(currentQno: number, option: any): void {

    if (currentQno === this.questionList.length) {
      this.isTestCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }

  startCounter(): void {
    this.interval$ = interval(1000)
      .subscribe(() => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter(): void {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter(): void {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetTest(): void {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";

  }

  getProgressPercent(): string {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }

}

import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {PersonalityTest} from "../../models/personality-test";
import {Answer} from "../../models/answer";
import {Question} from "../../models/question";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public name: string = "";
  public test: PersonalityTest = new PersonalityTest();
  progress: string = "0";

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }

  getAllQuestions(): void {
    this.questionService.getQuestions()
      .subscribe((questions: Question[]) => {
        this.test.questions = questions;
      })
  }

  answerQuestion(currentQno: number, answer: Answer): void {
    this.test.answerQuestion(currentQno, answer);
    setTimeout(() => {
      this.getProgressPercent();
    }, 100);
  }

  resetTest(): void {
    this.test.resetTest();
    this.getAllQuestions();
    this.progress = "0";
  }

  getProgressPercent(): string {
    this.progress = this.test.getProgressPercent();
    return this.progress;
  }

}

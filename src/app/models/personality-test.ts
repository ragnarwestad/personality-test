import {Question} from "./question";
import {Answer} from "./answer";

export class PersonalityTest {
  public questions: Question[] = [];
  public introvertAnswers: number = 0;
  public extrovertAnswers: number = 0;
  public isCompleted: boolean = false;
  public currentQuestion: number = 0;

  resetTest(): void {
    this.currentQuestion = 0;
  }

  answerQuestion(currentQno: number, answer: Answer): void {
    if (currentQno === this.questions.length) {
      this.isCompleted = true;
    }
    if (answer.introvert) {
      this.currentQuestion++;
      this.introvertAnswers++;
    } else {
      this.currentQuestion++;
      this.extrovertAnswers++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) this.currentQuestion++;
  }

  previousQuestion(): void {
    if (this.currentQuestion > 0) this.currentQuestion--;
  }


  getProgressPercent(): string {
    return ((this.currentQuestion / this.questions.length) * 100).toString();
  }

  isIntrovert(): boolean {
    return this.introvertAnswers >= this.extrovertAnswers;
  }
}

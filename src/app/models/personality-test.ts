import {Question} from "./question";

export class PersonalityTest {
  public questionList: Question[] = [];
  public correctAnswer: number = 0;
  public inCorrectAnswer: number = 0;
  public isTestCompleted: boolean = false;
}

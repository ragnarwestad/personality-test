
export class Question {

  questionText: string = '';
  answers: Answer[] = [
    {
      text: '',
      introvert: true
    } as Answer,
    {
      text: '',
      introvert: false
    } as Answer,
    {
      text: '',
      introvert: true
    } as Answer,
    {
      text: '',
      introvert: false
    } as Answer
  ]

}

export class Answer {
  text: string = '';
  introvert: boolean = false;
}

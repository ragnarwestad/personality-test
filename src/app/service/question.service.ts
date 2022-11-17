import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Question} from "../models/question";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>("assets/questions.json")
      .pipe(
        map((res: any) => res.questions
        ));
  }
}

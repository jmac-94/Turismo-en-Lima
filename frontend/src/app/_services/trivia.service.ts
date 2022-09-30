import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(
    private http: HttpClient
  ) { }

  getTriviaByPlaceID(place_id: any){
    return this.http.get<any>(`http://44.207.78.114:3000/trivias/${place_id}`);
  }

  getQuestionsByTriviaID(trivia_id: any){
    return this.http.get<any>(`http://44.207.78.114:3000/questions/${trivia_id}`);
  }
}

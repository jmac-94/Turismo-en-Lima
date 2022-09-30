import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http:HttpClient
  ) { }

  getCommentsByPlaceID(id: any){
    return this.http.get<any>(`http://44.207.78.114:3000/comments/${id}`);
  }
}
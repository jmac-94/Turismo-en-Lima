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
    return this.http.get<any>(`http://LoadBalancerProyecto-300297017.us-east-1.elb.amazonaws.com:8003/comments/${id}`);
  }
}
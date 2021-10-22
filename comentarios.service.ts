import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
/* Agregar "emitDecoratorMetadata": true,
en tsconfig.json
 */
export class ComentariosService {

  constructor(
    private http:HttpClient
  ) { }

  getComments(){
    return this.http.get<any>('http://localhost:3000/comments');
  }
}


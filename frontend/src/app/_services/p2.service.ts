import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class P2Service {

  constructor(
    private http: HttpClient
  ) {}

  getPlaces(){
    return this.http.get<any>('http://LoadBalancerProyecto-300297017.us-east-1.elb.amazonaws.com:8002/places');
  }

  getPlaceById(id: any){
    return this.http.get<any>(`http://LoadBalancerProyecto-300297017.us-east-1.elb.amazonaws.com:8002/places/${id}`);
  }
}

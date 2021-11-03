import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { P2Service } from '../_services/p2.service'

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.scss']
})
export class P2Component implements OnInit {

  places: any [] = [];

  constructor(
    private p2Service: P2Service,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.p2Service.getPlaces().subscribe(data => {
      this.places = data;
    })
  }

  viewPlace(lugar_id: any){
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ P2Component } from '../app/p2/p2.component';
import{ P1Component } from '../app/p1/p1.component';
import { P3Component } from './p3/p3.component';

const routes: Routes = [
  {path:'',component: P1Component},
  {path:'P2',component: P2Component},
  {path:'P2/vistas',component: P3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
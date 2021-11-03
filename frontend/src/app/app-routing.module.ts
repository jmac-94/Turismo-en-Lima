import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ P2Component } from '../app/p2/p2.component';

const routes: Routes = [
  {path:'P2',component: P2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
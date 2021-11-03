import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentsTableComponent } from './comments-table/comments-table.component';
import { P2Component } from './p2/p2.component';
import { AppRoutingModule } from './app-routing.module';
import { P1Component } from './p1/p1.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsTableComponent,
    P2Component,
    P1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

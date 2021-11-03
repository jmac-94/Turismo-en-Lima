import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CommentsTableComponent } from './comments-table/comments-table.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P3L1Component } from './p3-l1/p3-l1.component';
import { P3L2Component } from './p3-l2/p3-l2.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsTableComponent,
    P2Component,
    P1Component,
    P3Component,
    P3L1Component,
    P3L2Component
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

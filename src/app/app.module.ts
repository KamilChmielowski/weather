import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    NavComponent,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularSvgIconModule.forRoot(),
    AsideComponent,
    BrowserModule,
    HttpClientModule,
    MainComponent,
    NavComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

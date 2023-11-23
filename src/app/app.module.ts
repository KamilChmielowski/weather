import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent],
    imports: [
        AngularSvgIconModule.forRoot(),
        AppRoutingModule,
        BrowserModule,
        FooterComponent,
        HttpClientModule,
        NavComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

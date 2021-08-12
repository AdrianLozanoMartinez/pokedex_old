import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { FootComponent } from './component/foot/foot.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OnlyallComponent } from './page/onlyall/onlyall.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    FootComponent,
    NavbarComponent,
    OnlyallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

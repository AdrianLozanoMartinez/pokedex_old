import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 


// import { registerLocaleData } from '@angular/common';
// import nombre_pipe_espanol from '@angular/common/locales/es';
// registerLocaleData(nombre_pipe_espanol);

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { FootComponent } from './component/foot/foot.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { OnlyallComponent } from './page/onlyall/onlyall.component';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    FootComponent,
    NavbarComponent,
    SearchComponent,
    OnlyallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [
    // {
    //     provide: LOCALE_ID,
    //     useValue: 'es'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

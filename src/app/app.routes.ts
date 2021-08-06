import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './component/error/error.component';

import { SearchComponent } from './component/search/search.component';
import { OnlyComponent } from './page/only/only.component';
import { Only2Component } from './page/only2/only2.component';
import { OnlyallComponent } from './page/onlyall/onlyall.component';

export  const ROUTES: Routes = [                                
  { path: '', component: HomeComponent },                 
  { path: 'appcomponente', component: AppComponent },
  { path: 'search', component: SearchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'only/:id', component: OnlyComponent },
  { path: 'only2/:id', component: Only2Component },
  { path: 'onlyall/:id', component: OnlyallComponent },
  { path: '**', component: ErrorComponent}
];
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './component/error/error.component';

import { OnlyallComponent } from './page/onlyall/onlyall.component';

export  const ROUTES: Routes = [                                
  { path: '', component: HomeComponent },                 
  { path: 'appcomponente', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'onlyall/:id', component: OnlyallComponent },
  { path: '**', component: ErrorComponent}
];
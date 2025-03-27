import { Routes } from '@angular/router';
import {  AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent }
];
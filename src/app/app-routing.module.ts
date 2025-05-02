import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', loadComponent: () => import('./registration-form/registration-form.component').then(m => m.RegistrationFormComponent) },
];



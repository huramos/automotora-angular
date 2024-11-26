import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { AutomovilesComponent } from './components/automoviles/automoviles.component';
import { PerfilComponent } from './components/perfil/perfil.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'automoviles', component: AutomovilesComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];
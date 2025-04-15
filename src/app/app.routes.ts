import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LogInComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent},


];

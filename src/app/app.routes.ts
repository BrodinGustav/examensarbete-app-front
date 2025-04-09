import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent},


];

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor (private router: Router) {}

  logOut() {


    localStorage.removeItem('jwt-token');

    localStorage.clear();

    this.router.navigate(['/login']);


  }}

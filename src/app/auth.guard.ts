import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate  {
  constructor(private router: Router) {}


  //Koll om JWT finns
  canActivate(): boolean {
    const token = localStorage.getItem('jwt-token');

    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  }

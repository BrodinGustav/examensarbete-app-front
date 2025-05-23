import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';  // Importera miljövariable

@Injectable({
  providedIn: 'root'
})
export class DeleteProfileBtnService {

  private apiUrl =`${environment.apiUrl}/api/users/me`;


  constructor(private http:HttpClient, private router: Router) { }


  //Radera användare
  deleteProfile(): Observable<UserProfile> {
      const token = localStorage.getItem('jwt-token')

       const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete<UserProfile>(`${this.apiUrl}`, { headers });


  }
}






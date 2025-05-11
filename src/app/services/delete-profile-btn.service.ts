import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';  // Importera miljövariable

@Injectable({
  providedIn: 'root'
})
export class DeleteProfileBtnService {

  private apiUrl =`${environment.apiUrl}/api/users`;


  constructor(private http:HttpClient, private router: Router) { }


  //Radera användare
  deleteProfile(id: number): Observable<UserProfile> {

    return this.http.delete<UserProfile>(`${this.apiUrl}/${id}`);


  }
}






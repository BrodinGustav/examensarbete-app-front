import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeleteProfileBtnService {

  private apiUrl ='http://localhost:8080/api/users'
 boolSnurra: boolean = false;

  constructor(private http:HttpClient, private router: Router) { }


  //Radera användare                                            OBS! KOLLA VARFÖR RETURN INTE FUNGERAR FÖR SUBSCRIPTION
 /* deleteProfile(id: number): Observable<UserProfile[]> {
    this.boolSnurra = true;
    return this.http.delete<UserProfile[]>(`${this.apiUrl}/${id}`)
    .subscribe(() => {
      this.boolSnurra = false;

      localStorage.clear();
      this.router.navigate(['/register']);
    });


  }*/
}






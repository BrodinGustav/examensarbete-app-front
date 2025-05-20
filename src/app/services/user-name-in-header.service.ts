import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserNameInHeader } from '../models/user-name-in-header';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Importera miljövariabler

@Injectable({
  providedIn: 'root'
})
export class UserNameInHeaderService {

  //Metod för att hämta mail och namn till header.component
  private apiUrl =`${environment.apiUrl}/api/users`;

  constructor(private http:HttpClient) { }

  //Hämta poster från API
  getAllUsers(): Observable<UserNameInHeader[]> {   //Kontrollerar datan mot interface, returnerar observable
     const token = localStorage.getItem('jwt-token')

       const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<UserNameInHeader[]>(this.apiUrl, { headers });
    }

}

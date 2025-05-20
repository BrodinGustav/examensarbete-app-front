import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/register-request';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Importera miljövariabler

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl =`${environment.apiUrl}/api/auth/register`;

  constructor(private http:HttpClient) { }

    //Skickar poster till API
      register (data: RegisterRequest): Observable<any> {   //Returnerar observable
        const token = localStorage.getItem('jwt-token')

       const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

        return this.http.post(`${this.apiUrl}`, data, { headers })
}
}

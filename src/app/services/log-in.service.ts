import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInRequest } from '../models/log-in-request';
import { environment } from '../environments/environment';  // Importera miljövariabler


@Injectable({
  providedIn: 'root'
})
export class LogInService {

  //Variabel för att lagra data från POST
  email: string = '';
  password: string = '';

  private apiUrl = `${environment.apiUrl}/api/auth/login`;

  constructor(private http: HttpClient) { }

  //Skickar poster till API
  login(data: LogInRequest): Observable<any> {   //Använder interface, Returnerar observable
    const token = localStorage.getItem('jwt-token')

       const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}`, data, { headers })
  }

}

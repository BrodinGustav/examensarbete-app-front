import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInRequest } from '../models/log-in-request';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  //Variabel för att lagra data från POST
  email: string = '';
  password: string = '';

  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) { }

  //Skickar poster till API
  login(data: LogInRequest): Observable<any> {   //Använder interface, Returnerar observable
    return this.http.post(`${this.apiUrl}`, data)
  }
}

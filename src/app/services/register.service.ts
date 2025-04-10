import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/register-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl ='https://localhost:8080/api/auth/register';

  constructor(private http:HttpClient) { }

    //Skickar poster till API
      register (data: RegisterRequest): Observable<any> {   //Returnerar observable
       return this.http.post(`${this.apiUrl}`, data)
}
}

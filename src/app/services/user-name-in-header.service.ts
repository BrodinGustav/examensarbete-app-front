import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserNameInHeader } from '../models/user-name-in-header';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNameInHeaderService {

  //Metod för att hämta mail och namn till header.component
  private apiUrl ='http://localhost:8080:/api/users';

  constructor(private http:HttpClient) { }

  //Hämta poster från API
    getData(): Observable<UserNameInHeader[]> {   //Kontrollerar datan mot interface, returnerar observable
      return this.http.get<UserNameInHeader[]>(this.apiUrl);
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserApiResponse  } from '../models/profile-activities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl ='http://localhost:8080/api/users';

  constructor(private http:HttpClient) { }


   //Hämta användaraktiviteter från API
    getUser(id: number): Observable<UserApiResponse> {   //Kontrollerar datan mot interface, returnerar observable
      return this.http.get<UserApiResponse>(`${this.apiUrl}/${id}`);
    }
}

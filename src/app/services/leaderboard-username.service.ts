import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderbordUsername } from '../models/leaderbord-username';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardUsernameService {

  private apiUrl ='http://localhost:8080:/api/users';

  constructor(private http:HttpClient) { }

//Hämta användarnanm från API
getData(): Observable<LeaderbordUsername[]> {   //Kontrollerar datan mot interface, returnerar observable
  return this.http.get<LeaderbordUsername[]>(this.apiUrl);
}


}

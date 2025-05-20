import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderboardUser } from '../models/leaderboard-user';
import { environment } from '../environments/environment';  // Importera miljövariable


@Injectable({
  providedIn: 'root'
})
export class LeaderboardUsernameService {

  private apiUrl =`${environment.apiUrl}/api/users`;

  constructor(private http:HttpClient) { }

//Hämta användarnanm från API
getData(): Observable<LeaderboardUser[]> {   //Kontrollerar datan mot interface, returnerar observable
  const token = localStorage.getItem('jwt-token')

       const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

  return this.http.get<LeaderboardUser[]>(this.apiUrl, { headers });
}


}

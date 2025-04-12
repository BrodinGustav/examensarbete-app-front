import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderboardUser } from '../models/leaderboard-user';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardServiceService {

  private apiUrl ='http://localhost:8080/api/useractivities/stream';

  constructor(private http:HttpClient) { }

   //Hämta användaraktiviteter från API
    getData(): Observable<LeaderboardUser[]> {   //Kontrollerar datan mot interface, returnerar observable
      return this.http.get<LeaderboardUser[]>(this.apiUrl);
    }
}

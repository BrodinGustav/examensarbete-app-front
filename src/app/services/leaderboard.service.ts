import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderboardFetch } from '../models/leaderboard-fetch';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardServiceService {

  private apiUrl ='https://localhost:8080:/api/useractivities';

  constructor(private http:HttpClient) { }

   //Hämta poster från API
    getData(): Observable<LeaderboardFetch[]> {   //Kontrollerar datan mot interface
      return this.http.get<LeaderboardFetch[]>(this.apiUrl);
    }
}

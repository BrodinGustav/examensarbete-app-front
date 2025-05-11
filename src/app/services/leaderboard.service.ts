import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderboardUser } from '../models/leaderboard-user';
import { environment } from '../environments/environment';  // Importera miljövariable

@Injectable({
  providedIn: 'root'
})
export class LeaderboardServiceService {

  private apiUrl =`${environment.apiUrl}/api/useractivities/stream`;

  constructor(private http:HttpClient) { }

   //Hämta användaraktiviteter från API
    getData(): Observable<LeaderboardUser[]> {   //Kontrollerar datan mot interface, returnerar observable
      return this.http.get<LeaderboardUser[]>(this.apiUrl);
    }
}

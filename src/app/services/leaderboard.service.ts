import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardServiceService {

  private apiUrl ='https://localhost:8080:/api/useractivities';

  constructor(private http:HttpClient) { }

   //Hämta poster från API
    getData(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
}

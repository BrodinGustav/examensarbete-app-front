import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityList } from '../models/activity-list';
import { environment } from '../environments/environment';  // Importera miljövariabler

@Injectable({
  providedIn: 'root'
})
export class ActivityListService {

  private apiUrl =`${environment.apiUrl}/api/activities`;

  constructor(private http:HttpClient) { }


  //Hämta aktiviteter från API
     getActivities(): Observable<ActivityList[]> {
       const token = localStorage.getItem('jwt-token')

       const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

        return this.http.get<ActivityList[]>(`${this.apiUrl}`, { headers });
      }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityList } from '../models/activity-list';

@Injectable({
  providedIn: 'root'
})
export class ActivityListService {

  private apiUrl ='http://localhost:8080/api/activities';

  constructor(private http:HttpClient) { }


  //Hämta aktiviteter från API
     getActivities(): Observable<ActivityList[]> {
        return this.http.get<ActivityList[]>(`${this.apiUrl}`);
      }
}


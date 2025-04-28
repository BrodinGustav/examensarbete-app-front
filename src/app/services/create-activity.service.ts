import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateActivity } from '../models/create-activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateActivityService {

  private apiUrlCreate ='http://localhost:8080/api/useractivities/create';
  private apiUrlFetch ='http://localhost:8080/api/activities';

  constructor(private http:HttpClient) { }

  //Skapa aktivitet
        registerActivity (activity: CreateActivity): Observable<any> {   //Returnerar observable
         return this.http.post(`${this.apiUrlCreate}`, activity)
}

  //Hämta tillgängliga aktiviteter från DB
  getActivities(): Observable<{ activity: string }[]> {
    return this.http.get<{ activity: string }[]>(`${this.apiUrlFetch}`)
  }
}

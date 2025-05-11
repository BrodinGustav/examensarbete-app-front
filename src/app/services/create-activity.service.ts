import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateActivity } from '../models/create-activity';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Importera miljövariable

@Injectable({
  providedIn: 'root'
})
export class CreateActivityService {

  private apiUrlCreate =`${environment.apiUrl}/api/useractivities/create`;
  private apiUrlFetch =`${environment.apiUrl}/api/activities`;

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

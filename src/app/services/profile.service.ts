import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivitySummary, UserApiResponse, UserData  } from '../models/profile-activities';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Importera miljövariabler

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl =`${environment.apiUrl}/api/users`;



  constructor(private http:HttpClient) { }


   //Hämta användaraktiviteter i gupperad form från API
   getWeeklyPoints(id: number): Observable<ActivitySummary[]> {   //Kontrollerar datan mot interface, returnerar observable
      return this.http.get<ActivitySummary[]>(`${this.apiUrl}/${id}/weekly-activity-points`);
    }

    //Hämntning av alla aktiviteter för användaren
    getUserData(id: number): Observable<{ message: string; data: UserData }> {
      return this.http.get<{ message: string; data: UserData }>(`${this.apiUrl}/${id}`);
    }
}

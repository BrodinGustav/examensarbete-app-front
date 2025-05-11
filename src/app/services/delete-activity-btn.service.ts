import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Importera miljövariable

@Injectable({
  providedIn: 'root'
})
export class DeleteActivityBtnService {

  private apiUrl =`${environment.apiUrl}/api/useractivities`;
;

  constructor(private http:HttpClient) { }


   //Radera användaraktivitet
   deleteActivity(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
}

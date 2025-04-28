import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteActivityBtnService {

  private apiUrl ='http://localhost:8080/api/useractivities';
;

  constructor(private http:HttpClient) { }

  //Hämtar användaraktiviteter

   //Radera användaraktivitet
   deleteActivity(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
}

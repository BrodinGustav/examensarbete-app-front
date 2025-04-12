import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-leader-board',
  imports: [CommonModule],
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.css'
})
export class LeaderBoardComponent {

  //Variabel för att lagra data från GET
  points: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    //Hämtar data för utskrift till HomeComponent
    this.http.get<any[]>('http://localhost:8080/api/useractivities/stream')

    //Sätter subscribe till observable
      .subscribe(data => {
        this.points = data;
        console.log(this.points);
      });
  }

}

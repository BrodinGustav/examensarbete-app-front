import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LeaderboardUser } from '../models/leaderboard-user';
import { CurrentWeekComponent } from "../current-week/current-week.component";


@Component({
  selector: 'app-leader-board',
  imports: [CommonModule, CurrentWeekComponent],
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.css'
})
export class LeaderBoardComponent {

  //Variabel för att lagra data från GET
  points: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    //Hämtar data för utskrift till HomeComponent
    this.http.get<LeaderboardUser[]>('http://localhost:8080/api/useractivities/stream')

    //Sätter subscribe till observable
      .subscribe(data => {

        console.log('Hämtad data:', data);

        this.points = data; //Lagrar hämtad data

        console.log('Points:', this.points);

        //Debugg
        data.forEach((user, index) => {
          console.log(`Användare ${index + 1}:`, user.name);
          console.log('Aktiviteter:', user.activity);
      });
  });

}
}

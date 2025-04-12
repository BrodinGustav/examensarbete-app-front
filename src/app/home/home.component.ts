import { Component } from '@angular/core';
import { LeaderBoardComponent } from '../leader-board/leader-board.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
import { LeaderboardFetch } from '../models/leaderboard-fetch';
import { LeaderbordUsername } from '../models/leaderbord-username';

@Component({
  selector: 'app-home',
  imports: [LeaderBoardComponent, CommonModule, DateOfDayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Variabler för att spara poäng från GET
  points: any[] = [];
  topThreeUsers: any[] = [];

  constructor(private http: HttpClient) {}


  //Hämtar användaraktiviteter för top 3 placering i HomeComponent. Prenumenerar från GET i leaderboard.service.ts
  ngOnInit() {

    this.http.get<LeaderboardFetch[]>('http://localhost:8080/api/useractivities')
.subscribe(data => {

  //Sorterar efter poäng
  const sorted = data.sort((a, b) => b.points - a.points);

  //Sparar listan
  this.points = sorted;

  //Sparar tre högsta poäng
  this.topThreeUsers = sorted.slice(0, 3);
})

}

}

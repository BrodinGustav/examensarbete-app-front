import { Component } from '@angular/core';
import { LeaderBoardComponent } from '../leader-board/leader-board.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
import { LeaderboardUser } from '../models/leaderboard-user';

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

    this.http.get<LeaderboardUser[]>('http://localhost:8080/api/useractivities/stream')
.subscribe(data => {


const usersWithTotalPoints = data.map(user => ({
  ...user,
  totalPoints: Array.isArray(user.activity) ?
  user.activity.reduce((sum, activities) => sum + activities.points, 0) : 0
}));

console.log("User data:", data);

  //Sorterar efter poäng
  const sorted = usersWithTotalPoints.sort((a, b) => b.totalPoints - a.totalPoints);

  //Sparar listan
  this.points = sorted;

  //Sparar tre högsta poäng
  this.topThreeUsers = sorted.slice(0, 3);
})

}

}

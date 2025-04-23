import { Component } from '@angular/core';
import { LeaderBoardComponent } from '../leader-board/leader-board.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
import { LeaderboardUser } from '../models/leaderboard-user';
import { LeaderboardServiceService } from '../services/leaderboard.service';

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

  constructor(private leaderboardService: LeaderboardServiceService) {}


  //Hämtar användaraktiviteter för top 3 placering i HomeComponent. Prenumenerar från GET i leaderboard.service.ts
  ngOnInit() {

    //Prenumererar på datan från service
    this.leaderboardService.getData().subscribe(data => {
      this.points = data;


  //Sparar tre högsta poäng
  this.topThreeUsers = data.slice(0, 3);
})

}

}

import { Component } from '@angular/core';
import { LeaderBoardComponent } from '../leader-board/leader-board.component';
import { CommonModule } from '@angular/common';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
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
  loading: boolean = true;

  constructor(private leaderboardService: LeaderboardServiceService) { }


  //Hämtar användaraktiviteter för top 3 placering i HomeComponent. Prenumenerar från GET i leaderboard.service.ts
  ngOnInit() {
    this.leadLeaderboardData();
  }


  leadLeaderboardData(){
    //Prenumererar på datan från service
    this.leaderboardService.getData().subscribe({
      next: (data) => {
        this.points = data;


        //Sparar tre högsta poäng
        this.topThreeUsers = data.slice(0, 3);

        this.loading = false;

      },
      error: (error) => {
        console.error('Det gick inte att hämta data:', error);
        this.loading = false;

      }

    });

  }
}



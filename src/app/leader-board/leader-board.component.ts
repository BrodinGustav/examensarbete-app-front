import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LeaderboardUser } from '../models/leaderboard-user';
import { CurrentWeekComponent } from "../current-week/current-week.component";
import { LeaderboardServiceService } from '../services/leaderboard.service';


@Component({
  selector: 'app-leader-board',
  imports: [CommonModule, CurrentWeekComponent],
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.css'
})
export class LeaderBoardComponent {

  //Variabel för att lagra data från GET
  points: any[] = [];

  constructor(private leaderboardService: LeaderboardServiceService) {}

  ngOnInit() {

    //Hämtar data för utskrift till HomeComponent
    this.leaderboardService.getData().subscribe({
      next: (data) => this.points = data,
      error: () => console.error("Kunde inte hämta data till leaderboard.")
    });

}
}

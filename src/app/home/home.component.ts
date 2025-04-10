import { Component } from '@angular/core';
import { LeaderBoardComponent } from '../leader-board/leader-board.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";

@Component({
  selector: 'app-home',
  imports: [LeaderBoardComponent, CommonModule, DateOfDayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  points: any[] = [];
  topThreeUsers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/useractivities')
.subscribe(data => {
  //Sorterar efter poäng
  const sorted = data.sort((a, b) => b.activity.points - a.activity.points);

  //Sparar listan
  this.points = sorted;

  //Sparar tre högsta poäng
  this.topThreeUsers = sorted.slice(0, 3);
})
  }

}

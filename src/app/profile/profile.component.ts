import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
import { ProfileService } from '../services/profile.service';
import { ActivitySummary } from '../models/profile-activities';
import { CurrentWeekComponent } from '../current-week/current-week.component';
import { DateOnlyComponent } from '../date-only/date-only.component';
import { DeleteActivityBtnComponent } from "../delete-activity-btn/delete-activity-btn.component";



@Component({
  selector: 'app-profile',
  imports: [NgFor, DateOfDayComponent, DatePipe, CurrentWeekComponent, DateOnlyComponent, DeleteActivityBtnComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  //Variabel för att lagra data från GET
 getUser: any;
 userId!: number;

 weeklyPoints: ActivitySummary[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    //Hämtar vecknas poäng
    this.userId = Number(localStorage.getItem('userId'));

    this.profileService.getWeeklyPoints(this.userId).subscribe({
      next: (data) => {
        this.weeklyPoints = data;
        console.log('Aktivitet:', this.getUser);

        //debugg
        console.log(data);

      },
      error: (err) => {
        console.error('Kunde inte hämta aktivitet:', err);
      }

    });
  }

  deleted = (id: number) => {
    this.profileService.getWeeklyPoints(this.userId).subscribe({
      next: (data) => {
        this.weeklyPoints = data;
        console.log('Aktivitet:', this.getUser);

        //debugg
        console.log(data);

      },
      error: (err) => {
        console.error('Kunde inte hämta aktivitet:', err);
      }
    });
  }
}

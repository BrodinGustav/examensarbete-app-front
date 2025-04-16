import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
import { ProfileService } from '../services/profile.service';
import { ActivitySummary } from '../models/profile-activities';
import { CurrentWeekComponent } from '../current-week/current-week.component';
import { DateOnlyComponent } from '../date-only/date-only.component';



@Component({
  selector: 'app-profile',
  imports: [NgFor, DateOfDayComponent, DatePipe, CurrentWeekComponent, DateOnlyComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  //Variabel för att lagra data från GET
 getUser: any;

 weeklyPoints: ActivitySummary[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    const userId = Number(localStorage.getItem('userId'));

    this.profileService.getWeeklyPoints(userId).subscribe({
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

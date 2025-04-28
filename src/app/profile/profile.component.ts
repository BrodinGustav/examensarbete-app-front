import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
import { ProfileService } from '../services/profile.service';
import { ActivitySummary } from '../models/profile-activities';
import { CurrentWeekComponent } from '../current-week/current-week.component';
import { DateOnlyComponent } from '../date-only/date-only.component';
import { DeleteActivityBtnComponent } from "../delete-activity-btn/delete-activity-btn.component";
import { DeleteProfileBtnComponent } from "../delete-profile-btn/delete-profile-btn.component";



@Component({
  selector: 'app-profile',
  imports: [NgFor, DateOfDayComponent, DatePipe, CurrentWeekComponent, DateOnlyComponent, DeleteActivityBtnComponent, DeleteProfileBtnComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  //Variabel för att lagra data från GET och hantera id vid delete
 getUser: any;
 userId!: number;
 loading: boolean = true;

 weeklyPoints: ActivitySummary[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    //Hämtar vecknas poäng
    this.userId = Number(localStorage.getItem('userId'));

    this.profileService.getWeeklyPoints(this.userId).subscribe({
      next: (data) => {
        this.weeklyPoints = data;
        console.log('Aktivitet:', this.getUser);

        this.loading = false;

        //debugg
        console.log(data);

      },
      error: (err) => {
        console.error('Kunde inte hämta aktivitet:', err);

        this.loading = false;
      }

    });
  }


  //Delete
  deleted = (id: number) => {                                         //Det här känns fel. Stämmer denna delete för radering av aktivitet? delete-activit-btn har annan delete. Eller uppdaterar den bara listan efter radering?
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

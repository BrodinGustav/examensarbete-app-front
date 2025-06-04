import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
import { ProfileService } from '../services/profile.service';
import { ActivitySummary, UserData } from '../models/profile-activities';
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
 userData!: UserData; /*Hämta in aktivtet för specifik användare.*/

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    this.loadUserData();
    this.loadWeeklyPoints();
  }

    //Hämtar vecknas poäng

    loadWeeklyPoints(){
    this.profileService.getWeeklyPoints().subscribe({
      next: (data) => {
        this.weeklyPoints = data;


        this.loading = false;

      },
      error: (err) => {
        console.error('Kunde inte hämta aktivitet:', err);

        this.loading = false;
      }

    });
  }

    loadUserData() {
      this.profileService.getUserData().subscribe({
        next: (response) => {
          this.userData = response.data;
          this.loading = false;
        },
        error: (err) => {
          console.error("Kunde inte hämta användardata:", err);
          this.loading = false;
        }
      })
    }




  //Delete
  deleted = (activityId: number) => {

    //uppdaterar klumpsumma
    this.profileService.getWeeklyPoints().subscribe({
      next: (data) => {
        this.weeklyPoints = data;

      },
      error: (err) => {
        console.error('Kunde inte hämta aktivitet:', err);
      }
    });

    //Tar bort aktivitet direkt från listan
    if (this.userData && this.userData.activities) {
    this.userData.activities = this.userData.activities.filter(
      activity => activity.id !== activityId
    );
  }
}
};

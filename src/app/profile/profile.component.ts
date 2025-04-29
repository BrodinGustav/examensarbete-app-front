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
 userData!: UserData; /*Denna är för att hämta in aktivtet för specifik användare. Måste fixa backend dock?*/

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    this.loadUserData();
    this.loadWeeklyPoints();
  }

    //Hämtar vecknas poäng

    loadWeeklyPoints(){
    this.profileService.getWeeklyPoints(this.userId).subscribe({
      next: (data) => {
        this.weeklyPoints = data;
        console.log('Aktivitet:', this.getUser);
        console.log('Veckans aktiviteter:', this.weeklyPoints);


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

    loadUserData() {
      this.profileService.getUserData(this.userId).subscribe({
        next: (response) => {
          this.userData = response.data;
          console.log('Användardata:', this.userData);
          console.log('Aktiviteter:', this.userData.activities);
          this.loading = false;
        },
        error: (err) => {
          console.error("Kunde inte hämta användardata:", err);
          this.loading = false;
        }
      })
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

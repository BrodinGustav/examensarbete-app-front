import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';
import { DateOfDayComponent } from "../date-of-day/date-of-day.component";
import { ProfileService } from '../services/profile.service';



@Component({
  selector: 'app-profile',
  imports: [NgFor, DateOfDayComponent, DatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  //Variabel för att lagra data från GET
 getUser: any;


  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    const userId = 6;

    this.profileService.getUser(userId).subscribe({
      next: (response) => {
        this.getUser = response.data;
        console.log('Aktivitet:', this.getUser);
      },
      error: (err) => {
        console.error('Kunde inte hämta aktivitet:', err);
      }

    });
  }
}

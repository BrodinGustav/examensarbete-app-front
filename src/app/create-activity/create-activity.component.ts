import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CreateActivityService } from '../services/create-activity.service';
import { NgFor, NgIf } from '@angular/common';
import { CreateActivity } from '../models/create-activity';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, FormsModule, NgFor],
  templateUrl: './create-activity.component.html',
  styleUrl: './create-activity.component.css'
})

export class CreateActivityComponent implements OnInit {


  availableActivities: { activity: string }[] = [];   //Lista för tillgängliga aktiviteter
  selectedActivity: string = '';                      //Variabel för vald aktivitet
  selectedDuration: string = '';
  selectedDate: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  durations: string[] = ['15 min', '30 min', '45 min', '1h', '1h 30min', '2h'];



  constructor(private createActivityService: CreateActivityService) {}


ngOnInit(): void {

//Hämtar in aktiviter DB
this.createActivityService.getActivities().subscribe({
  next: (data) => this.availableActivities = data,
  error: () => this.errorMessage = "Kunde inte hämta aktiviteter"
});
}

//Skapar aktivitet
submitActivity() {
const userEmail = String(localStorage.getItem('userEmail'));

const newActivity: CreateActivity = {
  userEmail: userEmail,
  activity: this.selectedActivity,
  duration: this.selectedDuration,
  date: this.selectedDate,
};

  this.createActivityService.registerActivity(newActivity).subscribe({
    next: () => this.successMessage = "Aktivitet skapad!",
    error: () => this.errorMessage = "Kunde inte skapa aktivitet."
  });

  }
}


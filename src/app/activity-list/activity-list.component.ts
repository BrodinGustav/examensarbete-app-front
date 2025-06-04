import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivityListService } from '../services/activity-list.service';
import { ActivityList } from '../models/activity-list';

@Component({
  selector: 'app-activity-list',
  imports: [NgFor, CommonModule],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.css'
})
export class ActivityListComponent implements OnInit {

  activities: ActivityList[] = [];
  loading: boolean = true;

   constructor(private activityListSerivce: ActivityListService) { }

   ngOnInit() {
    this.loadActivities();
   }

   loadActivities(){
    this.activityListSerivce.getActivities().subscribe({
      next: (data) => {
        this.activities = data;

        this.loading = false;

      },
      error: (err) => {
        console.error('Kunde inte hämta aktiviteter:', err);

        this.loading = false;
      }

    });

  }
}

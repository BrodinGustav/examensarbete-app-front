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

    this.activityListSerivce.getActivities().subscribe({
      next: (data) => {
        this.activities = data;
        console.log('Aktiviteter:', this.activities);

        this.loading = false;

        //debugg
        console.log(data);


      },
      error: (err) => {
        console.error('Kunde inte hämta aktiviteter:', err);

        this.loading = false;
      }

    });

  }
}

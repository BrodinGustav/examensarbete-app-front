import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivityListService } from '../services/activity-list.service';
import { ActivityList } from '../models/activity-list';

@Component({
  selector: 'app-activity-list',
  imports: [NgFor],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.css'
})
export class ActivityListComponent implements OnInit {

  activities: ActivityList[] = [];

   constructor(private activityListSerivce: ActivityListService) { }

   ngOnInit() {

    this.activityListSerivce.getActivities().subscribe({
      next: (data) => {
        this.activities = data;
        console.log('Aktiviteter:', this.activities);

        //debugg
        console.log(data);

      },
      error: (err) => {
        console.error('Kunde inte hämta aktiviteter:', err);
      }

    });

  }
}

import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/profile-activities';
import { ProfileService } from '../services/profile.service';
import { CommonModule, NgIf } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartData } from 'chart.js';


@Component({
  selector: 'app-statistics',
  imports: [CommonModule, NgIf, BaseChartDirective],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit {

  userId!: number;
  userData!: UserData;
  loading: boolean = true;

   // Diagramdata
     public pieChartType: ChartType = 'pie';
     public pieChartData: ChartData<'pie', number[], string> = {
      labels: [],
      datasets: [{ data: [] }]
    };


  constructor(private profileService: ProfileService) { }


  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
      this.loadUserData();
  }

     loadUserData() {
    this.profileService.getUserData(this.userId).subscribe({
      next: (response) => {
        this.userData = response.data;
        console.log('Användardata:', this.userData);
        this.loading = false;

       //Konfigurerar diagramdata
       this.pieChartData.labels = this.userData.activities.map(a => a.activity);
       this.pieChartData.datasets[0].data = this.userData.activities.map(a => a.points);
     },

      error: (err) => {
        console.error('Kunde inte hämta användardata:', err);
        this.loading = false;
      }
    });

  }

  }

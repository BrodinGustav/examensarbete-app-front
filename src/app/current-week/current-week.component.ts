import { Component, OnInit } from '@angular/core';
import { WeekOfDateService } from '../services/week-of-date.service';

@Component({
  selector: 'app-current-week',
  standalone: true,
  imports: [],
  templateUrl: './current-week.component.html',
  styleUrl: './current-week.component.css'
})
export class CurrentWeekComponent implements OnInit{

  currentWeekNumber!: number;
  currentWeekRange!: string;

  constructor(private WeekOfDateService: WeekOfDateService) {}

  ngOnInit() {

    const { weekNumber, startOfWeek, endOfWeek } = this.WeekOfDateService.getCurrentWeekInfo();
    this.currentWeekNumber = weekNumber;
    this.currentWeekRange = `${startOfWeek} - ${endOfWeek}`;

  }
}

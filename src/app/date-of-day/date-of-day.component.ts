import { Component, OnInit } from '@angular/core';
import { DateOfDayService } from '../services/date-of-day.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-of-day',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './date-of-day.component.html',
  styleUrl: './date-of-day.component.css'
})
export class DateOfDayComponent implements OnInit {

currentDateAndTime: string | null = null;

  constructor(private dateService: DateOfDayService) { }


  ngOnInit(): void {
    this.loadTimeAndDate();
  }

  loadTimeAndDate(): void {
    this.currentDateAndTime = this.dateService.loadTimeAndDate();
  }

}

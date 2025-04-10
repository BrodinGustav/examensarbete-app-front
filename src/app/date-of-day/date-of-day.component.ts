import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateOfDayService } from '../services/date-of-day.service';
import { CommonModule, DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-date-of-day',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './date-of-day.component.html',
  styleUrl: './date-of-day.component.css'
})
export class DateOfDayComponent implements OnInit, OnDestroy {

currentDateAndTime: string | null = null;
private timerSubscription: Subscription | undefined;



  constructor(private dateService: DateOfDayService) { }


  ngOnInit(): void {
    this.loadTimeAndDate();
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); //Stopar interval-subscribe när komponenten tas bort
    }
  }

  loadTimeAndDate(): void {
    this.currentDateAndTime = this.dateService.loadTimeAndDate();
  }

  startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => {     //Intervall skapar en observable som uppdaterar värde varje sekund. Subscribe kör funktionen varje gång nytt värde skickas (varje sekund)
    this.loadTimeAndDate();                                       //Uppdaterar tiden varje sekund genom interval och subscribe
  });
}

}

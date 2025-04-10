import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateOfDayService {

  constructor(private datePipe: DatePipe) { }

  loadTimeAndDate() {
    const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');

    return currentDateAndTime;
  }
}


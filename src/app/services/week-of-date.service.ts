import { Injectable } from '@angular/core';
import { endOfISOWeek, format, getISOWeek, startOfISOWeek } from 'date-fns';
import { sv } from 'date-fns/locale/sv';

@Injectable({
  providedIn: 'root'
})
export class WeekOfDateService {

  constructor() {}

  getCurrentWeekInfo() {
    const now = new Date();
    const weekNumber = getISOWeek(now);

    const start = startOfISOWeek(now);
    const end = endOfISOWeek(now);

    const startOfWeek = format(start, 'd MMMM', {locale: sv });
    const endOfWeek = format(end, 'd MMMM', { locale: sv });

    return {
      weekNumber,
      startOfWeek,
      endOfWeek
    };
  }

}

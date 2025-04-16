import { Component } from '@angular/core';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale/sv';

@Component({
  selector: 'app-date-only',
  imports: [],
  templateUrl: './date-only.component.html',
  styleUrl: './date-only.component.css'
})
export class DateOnlyComponent {
  currentDate = format(new Date(), 'd MMMM yyyy', { locale: sv });
}

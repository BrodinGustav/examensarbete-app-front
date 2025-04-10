import { TestBed } from '@angular/core/testing';

import { DateOfDayService } from './date-of-day.service';

describe('DateOfDayService', () => {
  let service: DateOfDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateOfDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

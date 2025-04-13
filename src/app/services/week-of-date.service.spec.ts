import { TestBed } from '@angular/core/testing';

import { WeekOfDateService } from './week-of-date.service';

describe('WeekOfDateService', () => {
  let service: WeekOfDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekOfDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

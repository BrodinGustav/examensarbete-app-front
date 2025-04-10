import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOfDayComponent } from './date-of-day.component';

describe('DateOfDayComponent', () => {
  let component: DateOfDayComponent;
  let fixture: ComponentFixture<DateOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateOfDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

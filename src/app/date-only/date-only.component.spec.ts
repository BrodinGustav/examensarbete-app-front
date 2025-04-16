import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOnlyComponent } from './date-only.component';

describe('DateOnlyComponent', () => {
  let component: DateOnlyComponent;
  let fixture: ComponentFixture<DateOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateOnlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

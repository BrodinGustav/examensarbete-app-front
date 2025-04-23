import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityBtnComponent } from './delete-activity-btn.component';

describe('DeleteActivityBtnComponent', () => {
  let component: DeleteActivityBtnComponent;
  let fixture: ComponentFixture<DeleteActivityBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteActivityBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteActivityBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfileBtnComponent } from './delete-profile-btn.component';

describe('DeleteProfileBtnComponent', () => {
  let component: DeleteProfileBtnComponent;
  let fixture: ComponentFixture<DeleteProfileBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProfileBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProfileBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

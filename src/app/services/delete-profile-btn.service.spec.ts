import { TestBed } from '@angular/core/testing';

import { DeleteProfileBtnService } from './delete-profile-btn.service';

describe('DeleteProfileBtnService', () => {
  let service: DeleteProfileBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProfileBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

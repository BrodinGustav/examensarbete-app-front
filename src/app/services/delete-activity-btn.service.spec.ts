import { TestBed } from '@angular/core/testing';

import { DeleteActivityBtnService } from './delete-activity-btn.service';

describe('DeleteActivityBtnService', () => {
  let service: DeleteActivityBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteActivityBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

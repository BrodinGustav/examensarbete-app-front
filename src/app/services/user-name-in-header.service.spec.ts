import { TestBed } from '@angular/core/testing';

import { UserNameInHeaderService } from './user-name-in-header.service';

describe('UserNameInHeaderService', () => {
  let service: UserNameInHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNameInHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

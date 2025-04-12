import { TestBed } from '@angular/core/testing';

import { LeaderboardUsernameService } from './leaderboard-username.service';

describe('LeaderboardUsernameService', () => {
  let service: LeaderboardUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderboardUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoggedinGuardGuard } from './loggedin-guard.guard';

describe('LoggedinGuardGuard', () => {
  let guard: LoggedinGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedinGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

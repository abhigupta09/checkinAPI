import { TestBed } from '@angular/core/testing';

import { CreateCheckService } from './create-check.service';

describe('CreateCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCheckService = TestBed.get(CreateCheckService);
    expect(service).toBeTruthy();
  });
});

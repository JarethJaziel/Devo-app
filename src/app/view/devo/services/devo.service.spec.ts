import { TestBed } from '@angular/core/testing';

import { DevoService } from './devo.service';

describe('DevoService', () => {
  let service: DevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

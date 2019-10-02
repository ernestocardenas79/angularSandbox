import { TestBed } from '@angular/core/testing';

import { NiSoftLibService } from './ni-soft-lib.service';

describe('NiSoftLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NiSoftLibService = TestBed.get(NiSoftLibService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IabService } from './iab.service';

describe('IabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IabService = TestBed.get(IabService);
    expect(service).toBeTruthy();
  });
});

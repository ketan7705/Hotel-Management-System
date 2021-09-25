import { TestBed } from '@angular/core/testing';

import { AddroomService } from './addroom.service';

describe('AddroomService', () => {
  let service: AddroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

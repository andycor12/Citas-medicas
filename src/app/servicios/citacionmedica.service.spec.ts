import { TestBed } from '@angular/core/testing';

import { CitacionmedicaService } from './citacionmedica.service';

describe('CitacionmedicaService', () => {
  let service: CitacionmedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitacionmedicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

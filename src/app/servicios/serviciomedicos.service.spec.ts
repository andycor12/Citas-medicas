import { TestBed } from '@angular/core/testing';

import { ServiciomedicosService } from './serviciomedicos.service';

describe('ServiciomedicosService', () => {
  let service: ServiciomedicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciomedicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

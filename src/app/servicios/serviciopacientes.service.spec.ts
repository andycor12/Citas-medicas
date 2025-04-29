import { TestBed } from '@angular/core/testing';

import { ServiciopacientesService } from './serviciopacientes.service';

describe('ServiciopacientesService', () => {
  let service: ServiciopacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

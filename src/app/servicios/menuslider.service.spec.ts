import { TestBed } from '@angular/core/testing';

import { MenusliderService } from './menuslider.service';

describe('MenusliderService', () => {
  let service: MenusliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

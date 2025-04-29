import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasagendadasComponent } from './citasagendadas.component';

describe('CitasagendadasComponent', () => {
  let component: CitasagendadasComponent;
  let fixture: ComponentFixture<CitasagendadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasagendadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasagendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

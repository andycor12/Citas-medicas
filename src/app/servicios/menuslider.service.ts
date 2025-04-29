import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusliderService {


  private menuslider: MenuSlider[] = [
    {
      idrol: 3,
      nombre: "Home",
      ruta: "../home",
      icon: "fas fa-home",
    },
    // {
    //   idrol: 2,
    //   nombre: "Pacientes",
    //   ruta: "../listar-pacientes",
    //   icon: "fas fa-user-tie",
    // },
    {
      idrol: 2,
      nombre: "Medicos",
      ruta: "../listar-medicos",
      icon: "fas fa-user-nurse",
    },
    {
      idrol: 2,
      nombre: "Citas",
      ruta: "../listar-citas",
      icon: "fas fa-calendar-alt",
    },
    {
      idrol: 2,
      nombre: "Reportes de citas",
      ruta: "../reportes",
      icon: "fas fa-notes-medical",
    },
    {
      idrol: 2,
      nombre: "Usuarios",
      ruta: "../listar-usuarios",
      icon: "fas fa-users",
    },
    {
      idrol: 1,
      nombre: "Agendar Citas",
      ruta: "../agendar-citas",
      icon: "fas fa-book-medical",
    },
    {
      idrol: 1,
      nombre: "Citas Agendadas",
      ruta: "../citas-pendientes",
      icon: "fas fa-clipboard",
    },
    {
      idrol: 1,
      nombre: "Historial Citas",
      ruta: "../historial-citas",
      icon: "fas fa-hospital-user",
    },
    {
      idrol: 1,
      nombre: "Reportes Citas",
      ruta: "../reportes-usuarios",
      icon: "fas fa-notes-medical",
    }
  

  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getMenuSlider(): MenuSlider[] {
    return this.menuslider;
  }

}

export interface MenuSlider {
  idrol: number
  nombre: string;
  icon: string;
  ruta: string;
};
import { Component, OnInit } from '@angular/core';
import { CitacionmedicaService } from 'src/app/servicios/citacionmedica.service';

@Component({
  selector: 'app-citasagendadas',
  templateUrl: './citasagendadas.component.html',
  styleUrls: ['./citasagendadas.component.css']
})
export class CitasagendadasComponent implements OnInit {

  citasmedicas: any;
  medico: any;
  constructor(private citasService: CitacionmedicaService) { }

  ngOnInit(): void {
    this.ListarCitas()
  }


  ListarCitas() {
    let id = localStorage.getItem('idUser');
    this.citasService.CitasPendientes(id!).subscribe(respuesta => {
      this.citasmedicas = respuesta.response;
    });
  }


  buscarRegistro() {
    let nombre = (document.getElementById('buscarnombre') as HTMLInputElement).value;
    if (nombre != '') {
      this.citasService.BuscarCita(nombre).subscribe(resp => {
        if (resp.status == 200) {
          this.citasmedicas = resp.response;
        }
      });
    } else {
      console.log('Ingrese un nombre a buscar');

    }

  }

}

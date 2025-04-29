import { Component, OnInit } from '@angular/core';
import { CitacionmedicaService } from 'src/app/servicios/citacionmedica.service';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
import { ServiciopacientesService } from 'src/app/servicios/serviciopacientes.service';

@Component({
  selector: 'app-historial-citas',
  templateUrl: './historial-citas.component.html',
  styleUrls: ['./historial-citas.component.css']
})
export class HistorialCitasComponent implements OnInit {
  citasmedicas: any;
  medico: any;
  constructor(private citasService: CitacionmedicaService,
    private medicoService: ServiciomedicosService,
    private pacienteService: ServiciopacientesService) { }

  ngOnInit(): void {
    this.ListarCitas()
  }


  ListarCitas() {
    let id = localStorage.getItem('idUser');
    this.citasService.HistorialCita(id!).subscribe(respuesta => {
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

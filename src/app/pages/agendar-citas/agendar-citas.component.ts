import { Component, OnInit } from '@angular/core';
import { CitacionmedicaService } from 'src/app/servicios/citacionmedica.service';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
import { ServiciopacientesService } from 'src/app/servicios/serviciopacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitasComponent implements OnInit {
  citasmedicas: any;
  medico: any;
  constructor(private citasService: CitacionmedicaService,
    private medicoService: ServiciomedicosService,
    private pacienteService: ServiciopacientesService) { }

  ngOnInit(): void {
    this.ListarCitas()
  }


  ListarCitas() {
    this.citasService.ListarCitasDisponibles().subscribe(respuesta => {
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
  agendarCita(cita: any) {
    let fecha = cita.fecha.split('T')[0];
    Swal.fire(
      '¿Esta seguro de agendar la cita ?',
      `<b>Doctor:</b> ${cita.nombremedico}<br>
      <b>Especialidad:</b> ${cita.area}<br>
      <b>Fecha:</b> ${fecha}<br>
      <b>Direccion:</b> ${cita.direccion}<br>`,
      'question'
    ).then(resp => {
      if (resp.value) {
        window.location.href="http://localhost:4200/listar-citas"
        let idUser = localStorage.getItem('idUser');   
        this.citasService.AgendarCitaUsuario(cita.id, idUser!).subscribe(resp => {
          console.log(resp);
        });
      }
    });

  }

}

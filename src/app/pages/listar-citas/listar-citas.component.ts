import { Component, OnInit } from '@angular/core';
import { CitacionmedicaService } from 'src/app/servicios/citacionmedica.service';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
import { ServiciopacientesService } from 'src/app/servicios/serviciopacientes.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {
  citasmedicas: any;
  medico: any;
  constructor(private citasService: CitacionmedicaService,
    private medicoService: ServiciomedicosService,
    private pacienteService: ServiciopacientesService) { }

  ngOnInit(): void {
    this.ListarCitas()




  }


  ListarCitas() {
    this.citasService.ListarCitas().subscribe(respuesta => {
      this.citasmedicas = respuesta.response;
    });
  }

  borrarRegistro(id: string) {
    this.citasService.BorrarCita(id).subscribe((resp) => {
      if (resp.status == 200) {
        console.log('Registro eliminado correctamente');
        this.ListarCitas();
      }
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



import { Component, OnInit } from '@angular/core';
import { CitacionmedicaService } from 'src/app/servicios/citacionmedica.service';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
import { ServiciopacientesService } from 'src/app/servicios/serviciopacientes.service';
import { ServiciousuarioService } from 'src/app/servicios/serviciousuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numcitas: number = 0;
  nummedicos: number = 0;
  numpacientes: number = 0;
  numreportes: number = 0;
  usuario:any;
  constructor(
    private citasService: CitacionmedicaService, 
    private ServiciomedicosService: ServiciomedicosService,
    private servicioUsuario: ServiciousuarioService, 
    private ServiciopacientesService: ServiciopacientesService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
    this.listarCitas();
    this.listarMedicos();
    this.listarPacientes();
  }
  listarCitas() {
    this.citasService.ListarCitas().subscribe(respuesta => {
      this.numcitas = respuesta.response.length;
    });
  }
  listarMedicos() {
    this.ServiciomedicosService.ObtenerMedico().subscribe((resp: any) => {
      this.nummedicos = resp.length;
    });
  }
  listarPacientes() {
    this.ServiciopacientesService.ObtenerPaciente().subscribe((resp: any) => {
      this.numpacientes = resp.length;
    });
  }
  obtenerUsuario() {
    var idUsuario = localStorage.getItem('idUser');
    console.log({idUsuario});
    
    if (idUsuario != null) {
      this.servicioUsuario.getUsuario(idUsuario).subscribe((user: any) => {
        this.usuario = user.response[0];
        
      });
    }

  }

}

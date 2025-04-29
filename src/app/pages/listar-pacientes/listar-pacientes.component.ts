import { Component, OnInit } from '@angular/core';
import { ServiciopacientesService } from 'src/app/servicios/serviciopacientes.service';


@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  pacientes:any;
  constructor  (private ServiciopacientesService:ServiciopacientesService) { }

  ngOnInit(): void {
    this.ServiciopacientesService.ObtenerPaciente().subscribe(respuesta=>{
      this.pacientes=respuesta;
      console.log(respuesta);
    });
  }

  borrarRegistro(idpaciente:any,iControl:any){
    this.ServiciopacientesService.BorrarRegistro(idpaciente).subscribe((respuesta)=>{
      //this.pacientes=respuesta;
      this.pacientes.splice(iControl,1);
   
  });
}


}

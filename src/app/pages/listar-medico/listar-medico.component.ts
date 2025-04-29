import { Component, OnInit } from '@angular/core';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.css']
})
export class ListarMedicoComponent implements OnInit {
  
  medicos:any;

  constructor(private ServiciomedicosService:ServiciomedicosService) { }

  ngOnInit(): void {
    this.ServiciomedicosService.ObtenerMedico().subscribe(respuesta=>{
      this.medicos=respuesta;
      console.log(respuesta);
    });
  }

  borrarRegistro(idmedicos:any,iControl:any){
    this.ServiciomedicosService.BorrarRegistro(idmedicos).subscribe((respuesta)=>{
      //this.pacientes=respuesta;
      this.medicos.splice(iControl,1);
   
  });
}
}

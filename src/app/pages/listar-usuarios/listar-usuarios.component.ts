import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  Usuarios:any;

  constructor( private UsuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.UsuariosService.ObtenerUsuario().subscribe(respuesta=>{
      console.log(respuesta);
      this.Usuarios=respuesta;
     
    });
  }

  borrarRegistro(id:any,iControl:any){
    this.UsuariosService.BorrarRegistro(id).subscribe((respuesta)=>{
      //this.pacientes=respuesta;
      this.Usuarios.splice(iControl,1);
   
  });

}
}

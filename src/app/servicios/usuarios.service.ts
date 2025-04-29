import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API:string='http://localhost/usuarios/';


  constructor(private clienteHttp:HttpClient) { }


  ObtenerUsuario(){
    return this.clienteHttp.get(this.API);
  }

  //agregar-empleado
AgregarUsuarioComponent(datosUsuario:Usuario):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertar=1",datosUsuario);
}

 //FORMULARIO editar-empleado
 
 Obtener(idusuario:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+idusuario);
}


//modificar-empleado
EditarUsuarios(idusuario:any,datosUsuario:any):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizar="+idusuario,datosUsuario);
}

//FORMULARIO listar-empleado
BorrarRegistro(idusuario:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?borrar="+idusuario);
}




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './pacientes';

@Injectable({
  providedIn: 'root'
})
export class ServiciopacientesService {

API:string='http://localhost/paciente/';

constructor(private clienteHttp:HttpClient) { }
    

  //FORMULARIO lista-empleado
 ObtenerPaciente(){
    return this.clienteHttp.get(this.API);
  }

//agregar-empleado
AgregarPacienteComponent(datosPaciente:Paciente):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertar=1",datosPaciente);
}

 //FORMULARIO editar-empleado
 
 Obtener(idpaciente:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+idpaciente);
}


//modificar-empleado
Editarpaciente(idpaciente:any,datosPaciente:any):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizar="+idpaciente,datosPaciente);
}

//FORMULARIO listar-empleado
BorrarRegistro(idpaciente:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?borrar="+idpaciente);
}

}

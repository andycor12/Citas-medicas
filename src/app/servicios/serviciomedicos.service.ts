import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './pacientes';



@Injectable({
  providedIn: 'root'
})
export class ServiciomedicosService {

  API:string='http://localhost/medicos/';

  constructor(private clienteHttp:HttpClient) { }

//FORMULARIO lista-empleado
ObtenerMedico(){
  return this.clienteHttp.get(this.API);
}

//agregar-empleado
AgregarMedicoComponent(datosMedico:Paciente):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertar=1",datosMedico);
}

//FORMULARIO editar-empleado
 
Obtener(idmedicos:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+idmedicos);
}

//modificar-empleado
EditarMedico(idmedicos:any,datosMedico:any):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizar="+idmedicos,datosMedico);
}

//FORMULARIO listar-empleado
BorrarRegistro(idmedicos:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?borrar="+idmedicos);
}

}

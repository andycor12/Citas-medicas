import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios';
import { Rol } from '../interface/rol';



@Injectable({
  providedIn: 'root'
})
export class ServiciousuarioService {

  servidor = "http://127.0.0.1:3000";

  constructor(private servicio: HttpClient) { }

  consultarlogin(loginusuario: Usuario): Observable<any> {
    return this.servicio.post(`${this.servidor}/api/login`, loginusuario);
  }

  consultarRegistrar(usuario: Usuario): Observable<Usuario> {
    return this.servicio.post<Usuario>(`${this.servidor}/api/register`,
      usuario
    )
  }
  getRoles(){
    return this.servicio.get(`${this.servidor}/api/rol`);
  }

  getUsuario(id:string){
    return this.servicio.get(`${this.servidor}/api/usuarios/${id}`);
  }

  getPacientes(){
    return this.servicio.get(`${this.servidor}/api/pacientes`);
  }




}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitacionMedica } from '../servicios/citacionmedica';


@Injectable({
  providedIn: 'root'
})
export class CitacionmedicaService {
  API: string = 'http://localhost:3000/api/citacionmedica/';
  constructor(private clienteHttp: HttpClient) { }


  //FORMULARIO cita-medica
  ListarCitas() {
    return this.clienteHttp.get<any>(this.API);
  }
  //FORMULARIO cita-medica
  ListarCitasDisponibles() {
    return this.clienteHttp.get<any>(this.API + 'disponibles');
  }

  ObtenerCita(id: string): Observable<any> {
    return this.clienteHttp.get<any>(this.API + id);
  }
  HistorialCita(id: string): Observable<any> {
    return this.clienteHttp.get<any>(this.API + 'historial/' + id);
  }
  CitasPendientes(id: string): Observable<any> {
    return this.clienteHttp.get<any>(this.API + 'pendientes/' + id);
  }

  //agregar cita-medica
  AgregarcitasComponent(datosCita: CitacionMedica): Observable<any> {
    return this.clienteHttp.post(this.API, datosCita);
  }

  //agregar cita-medica
  ReportesCitas(id_paciente: string, id_medico: string, fecha: string): Observable<any> {
    let mapa = {
      "id_medico": id_medico,
      "id_paciente": id_paciente,
      "fecha": fecha
    }
    return this.clienteHttp.post(this.API + 'reportes', mapa);
  }
  //agregar cita-medica
  GuardarReportes(data:any): Observable<any> {
    return this.clienteHttp.post(this.API + 'reporte', data);
  }

  //modificar cita-medica
  Editarcitas(id?: string, datosCita?: CitacionMedica): Observable<any> {
    return this.clienteHttp.put(this.API + id, datosCita);
  }


  //FORMULARIO cita-medica
  BorrarCita(id: any): Observable<any> {
    return this.clienteHttp.delete(this.API + id);
  }

  BuscarCita(nombre: string): Observable<any> {
    return this.clienteHttp.post(this.API + 'buscar', { "nombre": nombre });
  }

  AgendarCitaUsuario(id_cita: string, id_paciente: string) {
    // console.log({ "id_cita": id_cita, "id_paciente": id_paciente });
    return this.clienteHttp.post(this.API + 'agendar', { "id_cita": id_cita, "id_paciente": id_paciente });
  }

}

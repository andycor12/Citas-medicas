import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//login
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
//pacientes
import { ListarPacientesComponent } from './pages/listar-pacientes/listar-pacientes.component';
import { EditarPacientesComponent } from './pages/editar-pacientes/editar-pacientes.component';
import { AgregarPacientesComponent } from './pages/agregar-pacientes/agregar-pacientes.component';
//medicos
import { ListarMedicoComponent } from './pages/listar-medico/listar-medico.component';
import { AgregarMedicoComponent } from './pages/agregar-medico/agregar-medico.component';
import { EditarMedicoComponent } from './pages/editar-medico/editar-medico.component';
//citas medicas
import { ListarCitasComponent } from './pages/listar-citas/listar-citas.component';
import { EditarCitasComponent } from './pages/editar-citas/editar-citas.component';
import { AgregarCitasComponent } from './pages/agregar-citas/agregar-citas.component';
//inicio
import { HomeComponent } from './pages/home/home.component';
//reporte
import { ReportesComponent } from './pages/reportes/reportes.component';
//usuarios
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './pages/agregar-usuarios/agregar-usuarios.component';
import { AgendarCitasComponent } from './pages/agendar-citas/agendar-citas.component';
import { HistorialCitasComponent } from './pages/historial-citas/historial-citas.component';
import { ReportesUsuariosComponent } from './pages/reportes-usuarios/reportes-usuarios.component';
import { AdministradorGuard } from './seguridad/administrador.guard';
import { PacienteGuard } from './seguridad/paciente.guard';
import { CitasagendadasComponent } from './pages/citasagendadas/citasagendadas.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  //usuarios de login y registro
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  //inicio
  { path: 'home', component: HomeComponent},

  //pacientes
  { path: 'agregar-pacientes', component: AgregarPacientesComponent,canActivate:[AdministradorGuard] },
  { path: 'listar-pacientes', component: ListarPacientesComponent,canActivate:[AdministradorGuard] },
  { path: 'editar-pacientes/:id', component: EditarPacientesComponent,canActivate:[AdministradorGuard] },

  //medicos
  { path: 'agregar-medicos', component: AgregarMedicoComponent,canActivate:[AdministradorGuard] },
  { path: 'listar-medicos', component: ListarMedicoComponent,canActivate:[AdministradorGuard] },
  { path: 'editar-medicos/:id', component: EditarMedicoComponent,canActivate:[AdministradorGuard] },
  //citas
  { path: 'agregar-citas', component: AgregarCitasComponent,canActivate:[AdministradorGuard] },
  { path: 'listar-citas', component: ListarCitasComponent,canActivate:[AdministradorGuard] },
  { path: 'editar-citas/:id', component: EditarCitasComponent,canActivate:[AdministradorGuard] },
  //reporte
  { path: 'reportes', component: ReportesComponent,canActivate:[AdministradorGuard] },
  //usuario
  { path: 'agregar-usuarios', component: AgregarUsuariosComponent,canActivate:[AdministradorGuard] },
  { path: 'listar-usuarios', component: ListarUsuariosComponent,canActivate:[AdministradorGuard] },
  { path: 'editar-usuarios/:id', component: EditarUsuariosComponent,canActivate:[AdministradorGuard] },
  { path: 'reportes-usuarios', component: ReportesUsuariosComponent,canActivate:[PacienteGuard] },
  { path: 'historial-citas', component: HistorialCitasComponent,canActivate:[PacienteGuard] },
  { path: 'agendar-citas', component: AgendarCitasComponent,canActivate:[PacienteGuard] },
  { path: 'citas-pendientes', component: CitasagendadasComponent,canActivate:[PacienteGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

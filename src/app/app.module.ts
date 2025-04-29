import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

// If any issue using previous fonts import. you can try this:
// import pdfFonts from "pdfmake/build/vfs_fonts";

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);


import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ListarPacientesComponent } from './pages/listar-pacientes/listar-pacientes.component';
import { AgregarPacientesComponent } from './pages/agregar-pacientes/agregar-pacientes.component';
import { EditarPacientesComponent } from './pages/editar-pacientes/editar-pacientes.component';
import { EditarMedicoComponent } from './pages/editar-medico/editar-medico.component';
import { AgregarMedicoComponent } from './pages/agregar-medico/agregar-medico.component';
import { ListarMedicoComponent } from './pages/listar-medico/listar-medico.component';
import { EditarCitasComponent } from './pages/editar-citas/editar-citas.component';
import { AgregarCitasComponent } from './pages/agregar-citas/agregar-citas.component';
import { ListarCitasComponent } from './pages/listar-citas/listar-citas.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './pages/agregar-usuarios/agregar-usuarios.component';
import { ReportesUsuariosComponent } from './pages/reportes-usuarios/reportes-usuarios.component';
import { HistorialCitasComponent } from './pages/historial-citas/historial-citas.component';
import { AgendarCitasComponent } from './pages/agendar-citas/agendar-citas.component';
import { CitasagendadasComponent } from './pages/citasagendadas/citasagendadas.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ListarPacientesComponent,
    AgregarPacientesComponent,
    EditarPacientesComponent,
    EditarMedicoComponent,
    AgregarMedicoComponent,
    ListarMedicoComponent,
    EditarCitasComponent,
    AgregarCitasComponent,
    ListarCitasComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    ReportesComponent,
    ListarUsuariosComponent,
    EditarUsuariosComponent,
    AgregarUsuariosComponent,
    ReportesUsuariosComponent,
    HistorialCitasComponent,
    AgendarCitasComponent,
    CitasagendadasComponent,
    
   
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

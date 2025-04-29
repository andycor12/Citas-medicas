import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ServiciopacientesService } from 'src/app/servicios/serviciopacientes.service';

@Component({
  selector: 'app-agregar-pacientes',
  templateUrl: './agregar-pacientes.component.html',
  styleUrls: ['./agregar-pacientes.component.css']
})
export class AgregarPacientesComponent implements OnInit {

  formularioDepacientes:FormGroup;
  constructor(
    private ServiciopacientesService:ServiciopacientesService,
    public formulario:FormBuilder,
    private ruteador:Router,) { 

    this.formularioDepacientes=this.formulario.group({
      nombre:[''],
      email:[''],
      ciudad:[''],
      telefono:[''],
      cedula:['']
    })

  }

  ngOnInit(): void {
    this.formularioDepacientes = this.formulario.group({
      
        nombre:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
        email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
        ciudad:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
        telefono:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
        cedula:['',[Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
      
    })
  }

    enviarDatos(){
      console.log("me presionaste");
      console.log(this.formularioDepacientes.value);
     this.ServiciopacientesService.AgregarPacienteComponent(this.formularioDepacientes.value).subscribe();
     this.ruteador.navigateByUrl('/listar-pacientes');


    }
}

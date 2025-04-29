import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {
  formularioDeMedicos:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private ServiciomedicosService:ServiciomedicosService,
    private ruteador:Router,
  ) {


    this.formularioDeMedicos=this.formulario.group({
      nombre:[''],
      email:[''],
      direccion:[''],
      telefono:[''],
      area:['']
    })





   }

  ngOnInit(): void {
    this.formularioDeMedicos = this.formulario.group({
      nombre:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      direccion:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      telefono:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      area:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
  })
  }

  enviarDatos():any{
    console.log("me presionaste");
    console.log(this.formularioDeMedicos.value);
   this.ServiciomedicosService.AgregarMedicoComponent(this.formularioDeMedicos.value).subscribe();
   //AGREGARMEDICOCOMPONENT ES UN SERVICIO NO UN COMPONENTE
   this.ruteador.navigateByUrl('/listar-medicos');
   window.location.href="http://localhost:4200/listar-medicos"

  }
}

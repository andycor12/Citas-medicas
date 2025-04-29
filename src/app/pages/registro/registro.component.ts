import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'src/app/interface/rol';
import { ServiciousuarioService } from 'src/app/servicios/serviciousuario.service';
import { Usuario } from 'src/app/servicios/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerform: FormGroup;

  roles: any;
  constructor(private servicio: ServiciousuarioService, public formulario: FormBuilder, private router: Router) {

    this.registerform = this.formulario.group({
      name: ['', (Validators.required, Validators.maxLength(20), Validators.minLength(5))],
      email: ['', (Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com"))],
      password: ['', (Validators.required, Validators.maxLength(7), Validators.minLength(5))],
      idrol: [''],
    })
  }
  ngOnInit(): void {
    this.servicio.getRoles().subscribe((resp: any) => {
      this.roles = resp.response;
    });

  }

  registrarUsuario() {
    if (this.registerform.invalid) {
      console.log("Formulario inválido")
    } else {
      let model = this.getRegistro();
      this.servicio.consultarRegistrar(model).subscribe(
        datos => {
          console.log(datos)
          this.router.navigate(['login'])
        }, error => {
          console.log(error)
        }
      )
    }
  }



  getRegistro() {
    let model = new Usuario();
    model.nombre = this.registerform.controls.name.value;
    model.email = this.registerform.controls.email.value;
    model.password = this.registerform.controls.password.value;
    model.idrol = this.registerform.controls.idrol.value;
    return model;
  }

}
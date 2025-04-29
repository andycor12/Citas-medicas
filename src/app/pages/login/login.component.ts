import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { ServiciousuarioService } from 'src/app/servicios/serviciousuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/servicios/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', (Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com"))),
    password: new FormControl('', (Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}"))),
  })

  constructor(private servicio: ServiciousuarioService, private router: Router) {

  }

  ngOnInit(): void { }

  LoginUsuario() {
    if (this.loginForm.invalid) {
      console.log("Formulario inválido")
    } else {
      let model = this.getLogin();
      this.servicio.consultarlogin(model).subscribe(
        datos => {
          if (datos.status == 200) {
            console.log(datos.usuario)
            // this.router.navigate(['/home']);
            location.href = '/home';
            localStorage.setItem('token', datos.token);
            localStorage.setItem('idUserRol', datos.usuario.idrol);
            localStorage.setItem('idUser', datos.usuario.id);
          } else {
            if (datos.status == 404) {
              alert(datos.error);
            }
          }

        }, error => {
          console.log(error)
        }
      )
    }
  }

  getLogin() {
    let model = new Usuario();
    model.email = this.loginForm.controls.email.value;
    model.password = this.loginForm.controls.password.value;
    return model;
  }

}

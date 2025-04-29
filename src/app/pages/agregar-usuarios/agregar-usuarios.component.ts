import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {

  formularioDeUsuario:FormGroup;
  constructor(
    private UsuariosService:UsuariosService,
    public formulario:FormBuilder,
    private ruteador:Router,) { 

    this.formularioDeUsuario=this.formulario.group({
        nombre:[''],
        email:[''],
        password:[''],
        idrol:[''],
    })

  }

  ngOnInit(): void {
    this.formularioDeUsuario = this.formulario.group({
      nombre:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      idrol:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      
    })
  }

  enviarDatos():any{
    console.log("me presionaste");
    console.log(this.formularioDeUsuario.value);
   this.UsuariosService.AgregarUsuarioComponent(this.formularioDeUsuario.value).subscribe();
   this.ruteador.navigateByUrl('/listar-usuarios');
   window.location.href="http://localhost:4200/listar-usuarios"

  }
}

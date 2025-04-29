import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  formularioDeUsuario:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private UsuariosService:UsuariosService,
    private ruteador:Router) {

      this.elID=this.activeRoute.snapshot.paramMap.get('id');
      this.UsuariosService.Obtener(this.elID).subscribe(
        respuesta=>{
          console.log(respuesta);
          this.formularioDeUsuario.setValue({
            nombre:respuesta[0]['nombre'],
            email:respuesta[0]['email'],
            password:respuesta[0]['password'],
            idrol:respuesta[0]['idrol']
          });
        }
      );


      this.formularioDeUsuario=this.formulario.group({
        nombre:[''],
        email:[''],
        password:[''],
        rol:[''],
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
      console.log(this.elID);
        console.log(this.formularioDeUsuario.value);
       this.UsuariosService.EditarUsuarios(this.elID,this.formularioDeUsuario.value).subscribe();
    
        this.ruteador.navigateByUrl('/listar-usuarios');
       }
  }
  
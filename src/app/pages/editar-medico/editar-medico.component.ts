import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent implements OnInit {
  formularioDeMedicos:FormGroup;
  elID:any;
  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private ServiciomedicosService:ServiciomedicosService,
    private ruteador:Router
  ) {

    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    this.ServiciomedicosService.Obtener(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeMedicos.setValue({
          nombre:respuesta[0]['nombre'],
          direccion:respuesta[0]['direccion'],
          email:respuesta[0]['email'],
          telefono:respuesta[0]['telefono'],
          area:respuesta[0]['area']
        });
      }
    );





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
    console.log(this.elID);
      console.log(this.formularioDeMedicos.value);
     this.ServiciomedicosService.EditarMedico(this.elID,this.formularioDeMedicos.value).subscribe();
  
      this.ruteador.navigateByUrl('/listar-medicos');
     }
}

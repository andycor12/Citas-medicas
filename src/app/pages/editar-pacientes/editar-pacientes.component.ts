import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ServiciopacientesService } from 'src/app/servicios/serviciopacientes.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.css']
})
export class EditarPacientesComponent implements OnInit {
  formularioDePacientes:FormGroup;
  elID:any;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private ServiciopacientesService:ServiciopacientesService,
    private ruteador:Router
    ) {

    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    this.ServiciopacientesService.Obtener(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDePacientes.setValue({
          nombre:respuesta[0]['nombre'],
          email:respuesta[0]['email'],
          ciudad:respuesta[0]['ciudad'],
          telefono:respuesta[0]['telefono'],
          cedula:respuesta[0]['cedula']
        });
      }
    );


    this.formularioDePacientes=this.formulario.group(
      {
        nombre:[''],
        email:[''],
        ciudad:[''],
        telefono:[''],
        cedula:['']
      }
    );
  

   }
 
   ngOnInit(): void {
    this.formularioDePacientes = this.formulario.group({
      
      nombre:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      ciudad:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      telefono:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      cedula:['',[Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
    })
}

enviarDatos():any{
  console.log(this.elID);
    console.log(this.formularioDePacientes.value);
   this.ServiciopacientesService.Editarpaciente(this.elID,this.formularioDePacientes.value).subscribe();

    this.ruteador.navigateByUrl('/listar-pacientes');
   }

  
}

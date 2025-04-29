import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CitacionMedica } from 'src/app/servicios/citacionmedica';
import { CitacionmedicaService } from 'src/app/servicios/citacionmedica.service';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';

@Component({
  selector: 'app-editar-citas',
  templateUrl: './editar-citas.component.html',
  styleUrls: ['./editar-citas.component.css']
})
export class EditarCitasComponent implements OnInit {
  formularioDeCitas: FormGroup;
  cita?: CitacionMedica;
  medicos: any;
  idCita?: string;
  constructor(private citasService: CitacionmedicaService,
    private medicoService: ServiciomedicosService,
    public formulario: FormBuilder, private route: ActivatedRoute) {

    this.formularioDeCitas = this.formulario.group({
      fecha: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      hora: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      medico: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      area: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      direccion: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      lugar: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      estado: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    })

  }


  ngOnInit(): void {
    this.medicoService.ObtenerMedico().subscribe(respuesta=>{
      this.medicos=respuesta;
    });
    this.idCita = this.route.snapshot.paramMap.get('id') || undefined;
    this.editarFarmacia();
  }
   actualizar(){
    const _cita: CitacionMedica = {
      fecha: this.formularioDeCitas.value.fecha,
      lugar: this.formularioDeCitas.value.lugar,
      estado: this.formularioDeCitas.value.estado,
      hora: this.formularioDeCitas.value.hora,
      id_medico: this.formularioDeCitas.value.medico,
      direccion: this.formularioDeCitas.value.direccion
    }

console.log(_cita);
    this.citasService.Editarcitas(this.idCita,_cita).subscribe(resp => {
      if (resp.status == 200) {
        console.log('Registro actualizado correctamente');
      }
    }, (error => {
      console.log(error.message);

    }));
   }

  editarFarmacia() {
    if (this.idCita != undefined) {
      this.citasService.ObtenerCita(this.idCita).subscribe(resp => {
        this.cita = resp.response[0];
        console.log(this.cita);
        this.formularioDeCitas.patchValue({
          fecha: this.cita?.fecha.split('T')[0],
          estado: this.cita?.estado,
          hora: this.cita?.hora,
          medico: this.cita?.id_medico,
          lugar: this.cita?.lugar,
          direccion: this.cita?.direccion
          
        })
      }, err => {
        console.log(err.message);
      });
    }


  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CitacionmedicaService } from 'src/app/servicios/citacionmedica.service';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
import { ServiciopacientesService } from 'src/app/servicios/serviciopacientes.service';
import { Router } from '@angular/router';
import { CitacionMedica } from 'src/app/servicios/citacionmedica';

@Component({
  selector: 'app-agregar-citas',
  templateUrl: './agregar-citas.component.html',
  styleUrls: ['./agregar-citas.component.css']
})
export class AgregarCitasComponent implements OnInit {

  formularioDeCitas: FormGroup;
  medicos: any;
  cita?: CitacionMedica;

  constructor(private citasService: CitacionmedicaService,
    private medicoService: ServiciomedicosService,
    private pacienteService: ServiciopacientesService, public formulario: FormBuilder, private ruteador: Router) {


    this.formularioDeCitas = this.formulario.group({
      // paciente: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      fecha: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      hora: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      medico: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      area: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      direccion: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      lugar: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      // estado: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    })

  }


  ngOnInit(): void {
    this.medicoService.ObtenerMedico().subscribe(respuesta=>{
      this.medicos=respuesta;
    });
    //   this.formularioDeCitas = this.formulario.group({
    //     paciente:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     fecha:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     hora:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     medico:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     area:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     direccion:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     lugar:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     estado:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    // })
  }


  agregarCita() {

    const _cita: CitacionMedica = {
      id_medico: this.formularioDeCitas.value.medico,
      fecha: this.formularioDeCitas.value.fecha,
      direccion: this.formularioDeCitas.value.direccion,
      hora: this.formularioDeCitas.value.hora,
      lugar: this.formularioDeCitas.value.lugar
    }

    console.log(_cita);


    this.citasService.AgregarcitasComponent(_cita).subscribe(resp => {
      if (resp.status == 200) {
        console.log('Registro insertado correctamente');
        this.formularioDeCitas.reset({});
      }
    }, (error => {
      console.log(error.message);
     
    }));


  }



}

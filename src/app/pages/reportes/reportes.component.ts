import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CitacionmedicaService } from 'src/app/servicios/citacionmedica.service';
import { ServiciomedicosService } from 'src/app/servicios/serviciomedicos.service';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { ServiciousuarioService } from 'src/app/servicios/serviciousuario.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  formularioDeReporte: FormGroup;
  medicos: any;
  pacientes: any;
  citasmedicas: any = [];
  costo: number = 0;
  constructor(public formulario: FormBuilder, private serviceUsuarios: ServiciousuarioService, private citasService: CitacionmedicaService, private medicoService: ServiciomedicosService) {


    this.formularioDeReporte = this.formulario.group({
      paciente: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      especialidad: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      fecha: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    })

  }


  ngOnInit(): void {
    this.medicoService.ObtenerMedico().subscribe(respuesta => {
      this.medicos = respuesta;
    });
    this.getPacientes();
    //   this.formularioDeReporte = this.formulario.group({
    //     paciente:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     especialidad:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     fecha:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     estado:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    //     pago:['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]]
    // })
  }



  buscarRegistro() {
    let especialidad = this.formularioDeReporte.value.especialidad;
    let fecha = this.formularioDeReporte.value.fecha;
    let idUser = this.formularioDeReporte.value.paciente;
    this.citasService.ReportesCitas(idUser!, especialidad, fecha).subscribe((resp: any) => {
      if (resp.status == 200) {
        // this.formularioDeCitas.reset({});
        this.citasmedicas = resp.response;
        //Calcular el costo
        this.costo = this.citasmedicas.length * 7500;
        console.log(this.costo);

      }
    }, (error => {
      console.log(error.message);

    }));


  }

  getPacientes() {
    this.serviceUsuarios.getPacientes().subscribe((resp:any) => {
      if (resp.status == 200) {
        this.pacientes=resp.response;
      }
    });
  }


  guardarReporte(repo: any) {
    let reporte = {
      "id_medico": repo.idMedico,
      "id_paciente": repo.idPaciente,
      "fecha": repo.fecha,
      "costo": this.costo,
      "estado": repo.estado,
      "pago": 'pendiente',
    }
    this.citasService.GuardarReportes(reporte).subscribe(resp => {
      console.log(resp);
    });
  }
  generaReporte(info: any) {
    this.guardarReporte(info);
    const pdf = new PdfMakeWrapper();
    pdf.add(
      new Txt('REPORTE CITA MEDICA').bold().italics().end
    );

    pdf.add(
      new Table([
        ['Especialidad', 'Medico', 'Paciente', 'Fecha', 'Hora', 'Lugar'],
        [info.area, info.nombremedico, info.nombre, info.fecha.split('T')[0], info.hora, info.lugar]
      ]).end
    );

    pdf.add(
      new Txt('COSTO TOTAL:                   $' + this.costo).bold().italics().end
    );
    //   pdf.info({
    //     title: 'A document',
    //     author: 'pdfmake-wrapper',
    //     subject: 'subject of document',
    // });


    // pdf.add(
    //   new Table([
    //     [
    //         new Txt('Column 1').bold().end,
    //         new Cell( new Txt('Column 2 with colspan').bold().end ).colSpan(2).end
    //     ],
    //     [
    //         new Txt('Column 1').bold().end,
    //         'Column 2',
    //         'Column 3'
    //     ]
    // ]).end
    // );
    pdf.create().open();
  }


}
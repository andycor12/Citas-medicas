import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciousuarioService } from 'src/app/servicios/serviciousuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario:any;
  constructor(private router: Router, private servicioUsuario: ServiciousuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }
  obtenerUsuario() {
    var idUsuario = localStorage.getItem('idUser');
    console.log({idUsuario});
    
    if (idUsuario != null) {
      this.servicioUsuario.getUsuario(idUsuario).subscribe((user: any) => {
        this.usuario = user.response[0];
        
      });
    }

  }

}

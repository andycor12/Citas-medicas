import { Component, OnInit } from '@angular/core';
import { MenusliderService } from 'src/app/servicios/menuslider.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menu: any;
  id: number=1;
  constructor(private service: MenusliderService) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('idUserRol') == '1') {
      this.id = 1;
    } else {
      if (localStorage.getItem('idUserRol') == '2') {
        this.id = 2;
      }
    }
    this.getMenu();
  }

  salir() {
    localStorage.clear();
    location.href = '/login';

  }
  getMenu() {
    this.menu = this.service.getMenuSlider().filter((item) => item.idrol == this.id ||item.idrol == 3);
  }

}

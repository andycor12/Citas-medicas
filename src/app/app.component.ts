import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webcitasmedicas';
  mostrar=false;
 
  constructor(private router:Router){
    
    
  }
  ngOnInit(){
    let tk=localStorage.getItem('token'); 
    if(tk!=null){
      this.mostrar=true;
      this.router.navigate(['/home']);
      // location.href='/home';
    }else{
      this.mostrar=false;
      this.router.navigate(['/login']);
    }
  }
  
}

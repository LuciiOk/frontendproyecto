import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ConexionService } from 'src/app/service/conexion.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  token:boolean = false
  nombre: string =  sessionStorage.getItem('nombre') ||'';

  constructor(
    private router: Router,
    private auth:ConexionService
  ) { }

  ngOnInit() {
    this.auth.userName.subscribe(data => {
      if (this.token === true) {
        this.nombre = data;
      }
    })

    this.auth.isLogged.subscribe(data => {
      this.token = data;
    })
  }

  ira() {
    this.router.navigate(['/'], {fragment: 'Test'});
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
  
  // realiza la navegacion al componente indicado
  navigateTo(component: string) {
    this.router.navigate([component]);
  }
}

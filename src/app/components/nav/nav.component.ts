import { Component, NgModule, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { ConexionService } from 'src/app/service/conexion.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  token:boolean = false
  nombre?:string;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private userservice:ConexionService
  ) { }

  ngOnInit(): void {
    this.userservice.getUser().subscribe(data => {
      if (sessionStorage.getItem('token')) {
        this.nombre = data;
        this.token = true;
      }
    })
  }

  prueba(){
    console.log('hols')
  }
  // realiza la navegacion al componente indicado
  navigateTo(component: string) {
    this.router.navigate([component]);
  }
}

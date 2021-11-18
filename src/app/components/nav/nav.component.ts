import { Component, NgModule, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  token:boolean = false
  nombre:string = localStorage.getItem('user') || ''

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.token = true;
    }
    console.log(this.token)
  }
  prueba(){
    console.log('hols')
  }
  // realiza la navegacion al componente indicado
  navigateTo(component: string) {
    this.router.navigate([component]);
  }
}

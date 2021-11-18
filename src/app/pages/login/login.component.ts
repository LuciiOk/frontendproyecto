import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;

  constructor(public servicio:ConexionService, public form:FormBuilder, private router:Router) { 
    this.formulario = this.form.group({
      mail:['', [Validators.required, Validators.email]],
      pass:['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  login() {
    this.servicio.login(this.formulario.value)
      .subscribe(data => {
        console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user.nombre)
      });
    this.router.navigate(['/juego']);
  }

}

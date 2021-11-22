import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:boolean = false;
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
    this.servicio.login(this.formulario.value).subscribe(data => {
        this.router.navigate(['']);
      }, error => {
        console.log(error.message);
        this.error = true;
      });
  }

}

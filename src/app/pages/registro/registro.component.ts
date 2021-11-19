import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { ConexionService } from 'src/app/service/conexion.service';





@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  infoPersonal:FormGroup;
  infoMedica:FormGroup;
  infoGustos:FormGroup;

  errorMessage?:string;
  error:boolean = false;

  isOptional = false

  show:number=1;
  
  completed = false

  editable = false

  constructor(public form:FormBuilder, private authService:ConexionService, private router: Router) {
    this.infoPersonal = this.form.group({
      nombre: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      nacimiento:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      edad: ['', Validators.required] ,
      sexo: ['', Validators.required]

    })

    this.infoMedica = this.form.group({
      estatura: ['', Validators.required],
      peso: ['', Validators.required]
    })

    this.infoGustos = this.form.group({
      salsa: ['no', []],
      folklor: ['no', []],
      zumba: ['no', []], 
      futbol: ['no', []],
      voley: ['no', []],
      basket: ['no', []]
    })
  }

  ngOnInit(): void {
  }

  registrar(){
    let {nombre, email, nacimiento, sexo} = this.infoPersonal.value;
    let {estatura, peso} = this.infoMedica.value;
    let {salsa, folklor, zumba, futbol, voley, basket} = this.infoGustos.value;

    let user:Users = {
      nombre, email, password: 'password', nacimiento, sexo,
      infoMedica: {estatura, peso},
      gustos: {salsa, folklor, zumba, futbol, voley, basket}
    }

    console.log(user)
    this.authService.register(user).subscribe((data:any) => {
      this.error = false;
      this.router.navigate(['']);
    }, error => {
      this.error = true;
      this.errorMessage = error.error.message;
    }
  );
  }
}

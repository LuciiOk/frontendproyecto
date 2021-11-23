import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { ConexionService } from 'src/app/service/conexion.service';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  stepOne:FormGroup;
  stepTwo:FormGroup;
  stepThree:FormGroup;

  isOptional = false
  editable = false;

  error = false;
  errorMessage?:string;

  
  constructor(private builder:FormBuilder, private authService:ConexionService, ) {
    this.stepOne = builder.group({
       nombre:['' ,Validators.compose([Validators.required])],
       password:['',[Validators.required]],
       email:['',Validators.compose([Validators.required, Validators.email])], 
       fechanacimiento:['',Validators.compose([Validators.required])],
       genero:['',Validators.compose([Validators.required])]
    });

    this.stepTwo = builder.group({
      estatura:['',Validators.compose([Validators.required, Validators.pattern(/[0-9]/)])],
      peso:['',Validators.compose([Validators.required])],
      enfcardiaca: [''],
      alergia: [''],
      enfrespiratorias: [''],
      cirugia: [''],
      cirugia2: [''],
      enfdegenerativa: [''],
      degenerativas: ['no']
    });

    this.stepThree = builder.group({
      futbol:['no',[Validators.required]],
      basket:['no',[Validators.required]],
      voley:['no',[Validators.required]],
      salsa:['no',[Validators.required]],
      zumba:['no',[Validators.required]],
      folklor:['no',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  completeStep(){
    // this.completed = true;
  }

  registrar(){
    let {nombre, email, password, fechanacimiento, genero} = this.stepOne.value;
    // let {estatura, peso, enfCardiaca, alergia, enfRespiratoria, cirugia, enfDegenerativa} = this.stepTwo.value;
    let {salsa, folklor, zumba, futbol, voley, basket} = this.stepThree.value;
    
    let user:Users = {
      nombre, email, password, fechanacimiento: fechanacimiento, genero: genero,
      infoMedica: this.stepTwo.value,
      gustos: {salsa, folklor, zumba, futbol, voley, basket}
    }

    console.log(user);

    this.authService.register(user).subscribe((data:any) => {
      this.error = false;
    }, error => {
      this.error = true;
      this.errorMessage = error.error.message;
    });
  }
}

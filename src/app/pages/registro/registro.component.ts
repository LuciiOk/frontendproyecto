import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  infoPersonal:FormGroup;
  infoMedica:FormGroup;
  isOptional = false

  show:number=1;
  
  completed = false

  editable = false

  constructor(public form:FormBuilder) {
    this.infoPersonal = this.form.group({
      nombre: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      nacimiento:['', Validators.required],
      edad: ['', Validators.required] ,
      sexo: ['', Validators.required]

    })

    this.infoMedica = this.form.group({
      estatura: ['', Validators.required],
      peso: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  showModal(){
    
  }
}

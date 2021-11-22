import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue:{
        displayDefaultIndicatorType: false
      }
    }
  ]
  
})
export class RegistroComponent implements OnInit {
 
  stepOne:FormGroup;
  stepTwo:FormGroup;
  stepThree:FormGroup;
  completed =false;
  
  constructor(builder:FormBuilder) {
    this.stepOne = builder.group({
       nombre:['',Validators.compose([Validators.required])],
       password:['',[Validators.required]],
       email:['',Validators.compose([Validators.required, Validators.email])], 
       fechanacimiento:['',Validators.compose([Validators.required])],
       genero:['',Validators.compose([Validators.required])]
       
      
    })
    this.stepTwo = builder.group({
      estatura:['',Validators.compose([Validators.required, Validators.pattern(/[0-9]/)])],
      peso:['',Validators.compose([Validators.required])]
    })
    this.stepThree = builder.group({
      futbol:[false,[Validators.required]],
      basket:[false,[Validators.required]],
      voley:[false,[Validators.required]],
      salsa:[false,[Validators.required]],
      zumba:[false,[Validators.required]],
      folklor:[false,[Validators.required]]
      
      
    })
   }

  ngOnInit(): void {

  }
  completeStep(){
    this.completed = true;

  }
}

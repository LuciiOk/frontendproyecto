import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicalInfo } from 'src/app/interfaces/medical-info';
import { Pleasures } from 'src/app/interfaces/pleasures';
import { Users } from 'src/app/interfaces/users';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  formulario:FormGroup;

  infoPersonal?:Users;
  infoMedica?:MedicalInfo;
  infoGustos?:Pleasures;

  constructor(private form:FormBuilder, private userData:UserDataService) {
    this.userData.getUserData().subscribe((data:Users[]) => { this.infoPersonal = data[0]; });
    this.userData.getMedicalInfo().subscribe((data:MedicalInfo) => { this.infoMedica = data; });
    this.userData.getPleasuresInfo().subscribe((data:any) => {this.infoGustos = data});

    this.formulario = this.form.group({
      nombre: new FormControl(['', [Validators.required]]),
      email:new FormControl(['', [Validators.required]]),
      genero: new FormControl(['', [Validators.required]]),
      fechanacimiento: new FormControl(['', [Validators.required]]),
      enfcardiaca:new FormControl(['', [Validators.required]]),
      enfrespiratorias: new FormControl(['', [Validators.required]]),
      cirugia: new FormControl(['', [Validators.required]]),
      alergia: new FormControl(['', [Validators.required]]),
      enfdegenerativa: new FormControl(['', [Validators.required]]),
      estatura: new FormControl(['', [Validators.required]]),
      peso: new FormControl(['', [Validators.required]]),
      salsa: new FormControl(['', [Validators.required]]),
      zumba: new FormControl(['', [Validators.required]]),
      folklor: new FormControl(['', [Validators.required]])
    });
  }

  ngOnInit(): void {
  }

  modificar( ){ 

  }

  cambiar(value:boolean, input:string) {
    console.log(value)
    if (value === false) {
      this.formulario.controls[input].disable();
      return;
    }
    this.formulario.controls[input].enable();
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @ViewChild('modaaa')
  modal!:ElementRef;

  formulario:FormGroup;
  error?:any;
  infoPersonal?:Users;
  infoMedica?:MedicalInfo;
  infoGustos?:Pleasures;

  fecha:Date = new Date();

  constructor(private calendar: NgbCalendar,private form:FormBuilder, private userData:UserDataService, private modalS:NgbModal) {
    this.userData.getUserData().subscribe((data:Users[]) => { this.infoPersonal = data[0]; 
      this.infoPersonal.fechanacimiento = Date.parse(this.infoPersonal?.fechanacimiento).toString();
    });
    this.userData.getMedicalInfo().subscribe((data:MedicalInfo) => { this.infoMedica = data; });
    this.userData.getPleasuresInfo().subscribe((data:any) => {this.infoGustos = data});

    this.formulario = this.form.group({
      nombre: new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      fechanacimiento: new FormControl('', [Validators.required]),
      enfcardiaca:new FormControl('', [Validators.required]),
      enfrespiratorias: new FormControl('', [Validators.required]),
      cirugia: new FormControl('', [Validators.required]),
      alergia: new FormControl('', [Validators.required]),
      enfdegenerativa: new FormControl('', [Validators.required]),
      estatura: new FormControl('', [Validators.required]),
      peso: new FormControl('', [Validators.required]),
      salsa: new FormControl('', [Validators.required]),
      zumba: new FormControl('', [Validators.required]),
      folklor: new FormControl('', [Validators.required]),
      futbol: new FormControl('', [Validators.required]),
      voley: new FormControl('', [Validators.required]),
      basket: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  modificar(){ 
    let {nombre, email, fechanacimiento, genero} = this.formulario.value;
    let {salsa, folklor, zumba, futbol, voley, basket} = this.formulario.value;
    let {peso, estatura, cirugia, alergia, enfcardiaca, enfrespiratorias, enfdegenerativa} = this.formulario.value;

    let user:Users = {
      nombre, email, fechanacimiento: fechanacimiento, genero,
      infoMedica: {peso, estatura, cirugia, alergia, enfcardiaca, enfrespiratorias, enfdegenerativa} ,
      gustos: {salsa, folklor, zumba, futbol, voley, basket}
    }

    this.userData.updateUser(user).subscribe(data => {
      this.modalS.open(this.modal);
      this.userData.updateMedicalInfo(user).subscribe(data => {},error => {
        this.error = error;
        this.modalS.open(this.modal);
        console.log(this.error.error.message);
      }) 
      this.userData.updatePleasures(user).subscribe(data => {},error => {
       
        this.error = error;
        this.modalS.open(this.modal);
        console.log(this.error.error.message);
      }) 
    }, error => {
      this.error = error
      this.modalS.open(this.modal);
      console.log(this.error.error.message)
    })
  }

  cerrar() {
    this.modalS.dismissAll();
  }

  cambiar(value:boolean, input:string) {
    if (value === false) {
      this.formulario.controls[input].reset();
      this.formulario.controls[input].removeValidators(Validators.required);
      this.formulario.controls[input].disable();
      return;
    }
    this.formulario.controls[input].setValidators(Validators.required)
    this.formulario.controls[input].enable();
    
  }
}

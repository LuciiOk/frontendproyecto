import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  formulario:FormGroup;

  constructor(private form:FormBuilder) {
    this.formulario = this.form.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      genero: ['', Validators.required],
      fechanacimiento: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  modificar( ){ 

  }

}

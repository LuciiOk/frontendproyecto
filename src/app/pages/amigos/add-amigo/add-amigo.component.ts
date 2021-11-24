import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Amigo } from 'src/app/interfaces/amigo';
import { AmigosService } from 'src/app/service/amigos.service';

@Component({
  selector: 'app-add-amigo',
  templateUrl: './add-amigo.component.html',
  styleUrls: ['./add-amigo.component.scss']
})
export class AddAmigoComponent implements OnInit {

  formulario:FormGroup;

  constructor(private modalService:NgbModal, private form:FormBuilder, private amigosService:AmigosService) {
    this.formulario = this.form.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  cerrar() {
    this.modalService.dismissAll();
  }

  agregarAmigo() {
    let amigo:Amigo = {
      nombre: this.formulario.value.nombre,
      genero: this.formulario.value.genero,
      id_usuario: parseInt(sessionStorage.getItem('id') || '')
    } 

    this.amigosService.agregarAmigo(amigo).subscribe(data => {
      console.log('se ha agregado el amigo');
      this.modalService.dismissAll(amigo);

    }, error => {
      console.log(error);
    });
  }
}

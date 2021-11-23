import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Preguntas } from 'src/app/interfaces/preguntas';

@Component({
  selector: 'app-modal-game',
  templateUrl: './modal-game.component.html',
  styleUrls: ['./modal-game.component.scss']
})
export class ModalGameComponent implements OnInit {
  @Input()
  jugador?:string;
  @Input()
  pregunta?:Preguntas;

  incorrecto?:boolean

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.modalService.dismissAll();
  }

  respuesta(respuesta:string) {
    if (this.pregunta?.respuestacorrecta == respuesta) {
      this.incorrecto = false;
    } else {
      this.incorrecto = true;
    }
  }

}

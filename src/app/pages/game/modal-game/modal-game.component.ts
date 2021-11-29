import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Preguntas } from 'src/app/interfaces/preguntas';

@Component({
  selector: 'app-modal-game',
  templateUrl: './modal-game.component.html',
  styleUrls: ['./modal-game.component.scss']
})
export class ModalGameComponent implements OnInit {
  @ViewChild('pregunta')
  modalPregunta!:ElementRef;

  @Input()
  jugador?:string;
  @Input()
  pregunta?:Preguntas;
  @Input()
  ejercicio?:string;

  preg?:string;
  respuestas?:Array<string>;
  incorrecto?:boolean

  timeLeft:number = 15;
  interval:any;

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
    this.respuestas = this.pregunta?.respuestas.sort(() => Math.random() - 0.5);
    this.preg = this.pregunta?.pregunta || '';
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
    },1000);
  }

  siguientePaso() {
    this.modalService.dismissAll();
    this.modalService.open(this.modalPregunta);
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

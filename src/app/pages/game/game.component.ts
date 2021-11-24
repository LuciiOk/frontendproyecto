import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UserDataService } from 'src/app/service/user-data.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ListaPreguntas, Preguntas } from 'src/app/interfaces/preguntas';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('presentacion')
  modal!:ElementRef;
  @ViewChild('winner')
  modalWinner!:ElementRef;
  @ViewChild('errorMod')
  error!:ElementRef;
  @ViewChild('juego')
  juego!:ElementRef;
  @ViewChild('amigos')
  amigos!:ElementRef;

  juegoEmpezado:boolean = false;

  array = [0,0,0,1,0,0,0];
  jugador?:Users;
  contrincanteNombre?:string;
  contrincante:number = 0;
  jugadorPrincipal:number = 0;
  ganador:string = '';
  puntosGanador = 0;

  turno = 1;

  preguntas:Preguntas[] = ListaPreguntas;

  pregunta?:Preguntas;

  constructor(private userData:UserDataService,  public modalService: NgbModal,) { }

  ngAfterViewInit() {
    
  }

  ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      this.jugador = data[0];
      this.modalService.open(this.modal, {size: 'lg', backdrop: 'static'});
      console.log(this.jugador)
    }, err => {
      console.log('Ha ocurrido un error!')
    });
  }

  abrirModal(modal:any) {
    this.modalService.open(modal, {size: 'xl', backdrop: 'static'})
  }

  comenzarJuego() {
    if (this.contrincanteNombre !== undefined) {
      this.juegoEmpezado = true;
      this.modalService.open(this.juego,  {size: 'lg', backdrop: 'static'})
      this.pregunta = this.preguntas[Math.floor(Math.random() * this.preguntas.length)]
      if (this.turno === 1)
        this.turno = 0;
      else 
        this.turno = 1;
    } else {
      this.modalService.open(this.error, {size: 'lg', backdrop: 'static'});
    }
  }

  cerrar() {
    this.modalService.dismissAll();
  }
  
  add(amigo:string) {
    this.contrincanteNombre = amigo;
  }

  punto(value:string) {
    console.log(this.array.findIndex( element => element === 1))
    if (value === 'jugador') {
      let indice = this.array.findIndex( element => element === 1);
      if (indice < 6) {
        this.array[indice] = 0;
        this.array[indice + 1] = 1;
        this.jugadorPrincipal ++;
        indice++;
        this.turno = 0
      }
      if (indice === 6) {
        this.modalService.open(this.modalWinner, {size: 'lg', backdrop: 'static'});
        if (this.jugador !== undefined) {
          this.ganador = this.jugador?.nombre;
          this.puntosGanador = this.jugadorPrincipal;
        }
        console.log('Has ganado!');
      }
    }

    if (value === 'contrincante') {
      let indice = this.array.findIndex( element => element === 1);
      if (indice > 0) {
        this.array[indice] = 0;
        this.array[indice - 1] = 1;
        this.contrincante++;
        indice--;
      }
      if (indice === 0) {
        this.modalService.open(this.modalWinner, {size: 'lg', backdrop: 'static'});
        if (this.contrincanteNombre !== undefined) {
          this.ganador = this.contrincanteNombre;
          this.puntosGanador = this.contrincante;
        }
        console.log('Ha ganado el contrincante');
      }
    }
  }
}

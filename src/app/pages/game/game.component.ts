import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UserDataService } from 'src/app/service/user-data.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

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

  juegoEmpezado:boolean = false;

  array = [0,0,0,1,0,0,0]
  amigos = ['ignacio', 'claudio', 'johan', 'ignacio', 'claudio', 'johan'];
  jugador?:Users;
  contrincanteNombre?:string;
  contrincante:number = 0;
  jugadorPrincipal:number = 0;
  ganador:string = ''

  constructor(private userData:UserDataService,  public modalService: NgbModal,) {
    
  }

  ngAfterViewInit() {
    
  }

  ngOnInit(): void {
    
    this.userData.getUserData().subscribe(data => {
      this.modalService.open(this.modal, {size: 'lg'});
      this.jugador = data[0];
      console.log(this.jugador)
    }, err => {
      console.log('Ha ocurrido un error!')
    });
  }

  openModal(elemento:any) {
    if (this.contrincanteNombre) {
      this.juegoEmpezado = true;
      this.modalService.open(elemento);
    }
  }

  add(amigo:string) {
    this.contrincanteNombre = amigo;
  }

  punto(value:string) {
    console.log(this.array.findIndex( element => element === 1))
    if (value === 'jugador') {
      let indice = this.array.findIndex( element => element === 1);
      if (indice > 0) {
        this.array[indice] = 0;
        this.array[indice - 1] = 1;
        this.jugadorPrincipal ++;
        indice--;
      }
      if (indice === 0) {
        this.modalService.open(this.modalWinner);
        if (this.jugador !== undefined) {
          this.ganador = this.jugador?.nombre;
        }
        console.log('Has ganado!');
      }
    }

    if (value === 'contrincante') {
      let indice = this.array.findIndex( element => element === 1);
      if (indice < 6) {
        this.array[indice] = 0;
        this.array[indice + 1] = 1;
        this.contrincante++;
        indice++;
      }
      if (indice === 6) {
        this.modalService.open(this.modalWinner);
        if (this.contrincanteNombre !== undefined) {
          this.ganador = this.contrincanteNombre;
        }
        console.log('Ha ganado el contrincante');
      }
    }
  }
}

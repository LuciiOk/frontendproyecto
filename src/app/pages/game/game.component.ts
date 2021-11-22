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

  array = [0,0,0,1,0,0,0]
  jugador?:Users;
  contrincante = 0;
  jugadorPrincipal = 0;

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
    this.modalService.open(elemento)
  }

  punto(value:string) {
    console.log(this.array.findIndex( element => element === 1))
    if (value === 'jugador') {
      let indice = this.array.findIndex( element => element === 1);
      if (indice > 0) {
        this.array[indice] = 0;
        this.array[indice - 1] = 1;
        this.jugadorPrincipal ++;
        indice ++;
      }
      if (indice === 0) {
        this.modalService.open(this.modalWinner);
        console.log('Has ganado!');
      }
    }

    if (value === 'contrincante') {
      let indice = this.array.findIndex( element => element === 1);
      if (indice < 6) {
        this.array[indice] = 0;
        this.array[indice + 1] = 1;
        this.contrincante ++;
        indice ++;
      }
      if (indice === 6) {
        this.modalService.open(this.modalWinner);
        console.log('Ha ganado el contrincante');
      }
    }
  }
}

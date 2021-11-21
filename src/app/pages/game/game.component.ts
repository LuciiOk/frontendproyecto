import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  array = [0,0,0,1,0,0,0]
  jugador?:Users;
  contrincante = 0;
  jugadorPrincipal = 0;

  constructor(private userData:UserDataService) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      console.log(data[0])
      this.jugador = data[0];
      console.log(this.jugador)
    }, err => {

    });
  }

  punto(value:string) {
    console.log(this.array.findIndex( element => element === 1))
    if (value === 'jugador') {
      let indice = this.array.findIndex( element => element === 1);
      if (indice > 0) {
        this.array[indice] = 0;
        this.array[indice - 1] = 1;
        this.jugadorPrincipal ++;
      }
      if (indice === 0) {
        console.log('Has ganado!');
      }
    }

    if (value === 'contrincante') {
      let indice = this.array.findIndex( element => element === 1);
      if (indice < 6) {
        this.array[indice] = 0;
        this.array[indice + 1] = 1;
        this.contrincante ++;
      }
      if (indice === 6) {
        console.log('Ha ganado el contrincante');
      }
    }
  }
}

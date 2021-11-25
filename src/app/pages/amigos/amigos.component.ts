import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Amigo } from 'src/app/interfaces/amigo';
import { AmigosService } from 'src/app/service/amigos.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent implements OnInit {
  @ViewChild('add')
  addFriend!:ElementRef;

  listaAmigos?:Amigo[];

  constructor(private modalService:NgbModal, private amigosService:AmigosService) { }

  ngOnInit(): void {
    this.amigosService.getAmigo().subscribe((amigos:Amigo[]) => {
      this.listaAmigos = amigos.map((amigo:Amigo) => amigo)
    });
  }

  abrir() {
    this.modalService.open(this.addFriend, {size: 'lg'}).dismissed
    .subscribe((result:Amigo) => this.ngOnInit());
  }

  eliminar(amigo:Amigo) {
    this.amigosService.deleteAmigo(amigo).subscribe(resultado => {
      this.ngOnInit();
    });
  }

}

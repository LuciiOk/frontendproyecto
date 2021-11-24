import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Amigo } from 'src/app/interfaces/amigo';
import { AmigosService } from 'src/app/service/amigos.service';

@Component({
  selector: 'app-listacontactos',
  templateUrl: './listacontactos.component.html',
  styleUrls: ['./listacontactos.component.scss']
})
export class ListacontactosComponent implements OnInit {

  listaAmigos?:Amigo[];

  constructor(private amigoService:AmigosService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.amigoService.getAmigo().subscribe(amigos => {
      this.listaAmigos = amigos;
    })
  }

  cerrar() {
    this.modalService.dismissAll();
  }

  selectAmigo(amigo:Amigo) {
    this.modalService.dismissAll(amigo);
  }

}

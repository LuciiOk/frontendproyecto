import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private amigoService:AmigosService, private modalService:NgbModal, private router:Router) { }

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

  add() {
    this.modalService.dismissAll();
    this.router.navigate(['/amigos']);
  }

}

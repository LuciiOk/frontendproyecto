import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.modalService.dismissAll();
  }

}

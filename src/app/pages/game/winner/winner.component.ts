import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  @Input() 
  ganador?:string;
  @Input()
  puntos?:number;
  
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.modalService.dismissAll();
  }
}

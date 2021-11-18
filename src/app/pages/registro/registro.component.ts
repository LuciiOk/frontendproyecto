import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  show:number=1;
  
  constructor() { }

  ngOnInit(): void {
  }
  showModal(){
    
  }
}

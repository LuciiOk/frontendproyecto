import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  @Input() 
  ganador?:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

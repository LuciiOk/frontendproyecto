import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  token:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.token = true;
    }
    console.log(this.token)
  }

}

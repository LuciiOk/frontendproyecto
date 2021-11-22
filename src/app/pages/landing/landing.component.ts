import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  private fragment?: string;
  constructor(private route: ActivatedRoute) { 

    
  }


  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment || ''; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector(`# ${this.fragment}` )?.scrollIntoView();
    } catch (e) { }
  }
}

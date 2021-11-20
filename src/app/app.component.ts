import { Component, NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-route',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
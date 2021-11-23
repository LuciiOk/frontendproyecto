import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmigosRoutingModule } from './amigos-routing.module';
import { AmigosComponent } from './amigos.component';


@NgModule({
  declarations: [
    AmigosComponent
  ],
  imports: [
    CommonModule,
    AmigosRoutingModule
  ]
})
export class AmigosModule { }

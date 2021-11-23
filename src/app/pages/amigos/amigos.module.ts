import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmigosRoutingModule } from './amigos-routing.module';
import { AmigosComponent } from './amigos.component';
import { AddAmigoComponent } from './add-amigo/add-amigo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AmigosComponent,
    AddAmigoComponent
  ],
  imports: [
    CommonModule,
    AmigosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AmigosModule { }

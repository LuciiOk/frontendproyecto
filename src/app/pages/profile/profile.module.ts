import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ModificarComponent } from './modificar/modificar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    ModificarComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfileModule { }

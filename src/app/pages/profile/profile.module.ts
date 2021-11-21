import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule, 
    RouterModule,
    MatIconModule
  ]
})
export class ProfileModule { }

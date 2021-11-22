import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule } from '@angular/material/stepper';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ComponentsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule
  ]
})
export class RegistroModule { }

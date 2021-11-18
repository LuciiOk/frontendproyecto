import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { GameComponent } from './game.component';
import { AuthGuardGuard } from 'src/app/helpers/auth-guard.guard';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ComponentsModule
  ],
  providers: [AuthGuardGuard]
})
export class GameModule { }

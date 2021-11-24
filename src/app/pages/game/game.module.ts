import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { GameComponent } from './game.component';
import { AuthGuardGuard } from 'src/app/helpers/auth-guard.guard';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WinnerComponent } from './winner/winner.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ModalGameComponent } from './modal-game/modal-game.component';
import { ListacontactosComponent } from './listacontactos/listacontactos.component';


@NgModule({
  declarations: [
    GameComponent,
    WinnerComponent,
    PresentationComponent,
    ModalGameComponent,
    ListacontactosComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ComponentsModule,
    NgbModalModule,
    NgbModule
  ],
  providers: [AuthGuardGuard]
})
export class GameModule { }

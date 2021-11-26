import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './helpers/auth-guard.guard';
import { LoggedinGuardGuard } from './helpers/loggedin-guard.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [LoggedinGuardGuard]
  },
  {
    path:'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroModule),
    canActivate: [LoggedinGuardGuard]
  },
  {
    path:'juego',
    loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule),
    canActivate: [AuthGuardGuard]

  },
  {
    path:'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path:'amigos',
    loadChildren: () => import('./pages/amigos/amigos.module').then(m => m.AmigosModule),
    canActivate: [AuthGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

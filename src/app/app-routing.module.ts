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
    canActivate: [LoggedinGuardGuard],
    loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'registro',
    canActivate: [LoggedinGuardGuard],
    loadChildren: () => import('./pages/registro/registro.module').then(m=>m.RegistroModule)
  },
  {
    path:'juego',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./pages/game/game.module').then(m=>m.GameModule),

  },
  {
    path:'profile',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

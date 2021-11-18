import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:'login',
    loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m=>m.RegistroModule)
  },
  {
    path:'juego',
    loadChildren: () => import('./pages/game/game.module').then(m=>m.GameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarComponent } from './modificar/modificar.component';
import { ProfileComponent } from './profile.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [{
  path:'',
  component: ProfileComponent,
  children: [
    {
      path: 'editar',
      component: ModificarComponent,
    }, {
      path: '',
      component: PerfilComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

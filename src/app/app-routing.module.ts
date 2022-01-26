import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule) },
  { path: 'placa', loadChildren: () => import('./modules/placa/placa.module').then(x => x.PlacaModule) },
  { path: 'modal', loadChildren: () => import('./modules/modal/modal.module').then(x => x.ModalModule) },
  { path: 'despachos', loadChildren: () => import('./modules/despachos/despachos.module').then(x => x.DespachosModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

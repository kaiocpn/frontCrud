import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MasterComponent } from './master/master.component';



const routes: Routes = [
  { path: '', component: MasterComponent},
  { path: 'novo', component: DetailComponent},
  { path: ':id', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacaRoutingModule { }

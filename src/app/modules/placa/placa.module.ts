import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacaRoutingModule } from './placa-routing.module';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from "./detail/detail.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespachosRoutingModule } from '../despachos/despachos-routing.module';



@NgModule({
  declarations: [
    MasterComponent,
    DetailComponent,

  ],
  imports: [
    CommonModule,
    PlacaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DespachosRoutingModule
  ]
})
export class PlacaModule { }

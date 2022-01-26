import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DespachosRoutingModule } from './despachos-routing.module';
import { MasterComponent } from './master/master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MasterComponent,
    
  ],


  imports: [
    CommonModule,
    DespachosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DespachosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRoutingModule } from './modal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { MasterComponent } from './master/master.component';


@NgModule({
  declarations: [ 
    MasterComponent,
    DetailComponent
  ],

  imports: [
    CommonModule,
    ModalRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ModalModule { }


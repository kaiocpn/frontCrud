import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlacaModule } from './modules/placa/placa.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from './modules/modal/modal.module';
import  { ToastrModule }  from  'ngx-toastr' ;
import  { BrowserAnimationsModule }  from  '@angular/platform-browser/animations' ;





@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    
    
   
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlacaModule,
    RouterModule,
    ModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

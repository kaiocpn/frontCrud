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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

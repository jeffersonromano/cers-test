import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopbarComponent } from './header-topbar/header-topbar.component';
import { SliderMasterComponent } from './slider-master/slider-master.component';
import { ServicesComponent } from './services/services.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FormContatoComponent } from './form-contato/form-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopbarComponent,
    SliderMasterComponent,
    ServicesComponent,
    ProjetosComponent,
    FormContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SliderMasterComponent]
})
export class AppModule { }

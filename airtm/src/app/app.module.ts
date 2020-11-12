import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtmTransaccionesComponent } from './atm-transacciones/atm-transacciones.component';
import { AtmBilleterasComponent } from './atm-billeteras/atm-billeteras.component';
import { AtmUsuariosComponent } from './atm-usuarios/atm-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmTransaccionesComponent,
    AtmBilleterasComponent,
    AtmUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

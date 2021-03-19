import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CicloDetalleComponent } from './components/ciclo-detalle/ciclo-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CiclosComponent,
    NavBarComponent,
    AsignaturasComponent,
    CicloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

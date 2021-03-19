import { CicloDetalleComponent } from './components/ciclo-detalle/ciclo-detalle.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"ciclos", component:CiclosComponent},
  {path:"asignaturas", component:AsignaturasComponent},
  {path:"cicloDetalle/:curso/:nombre", component:CicloDetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

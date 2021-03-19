import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { CiclosService } from './../../services/ciclos.service';
import { AsignaturasService } from './../../services/asignaturas.service';
import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  constructor(private servicioAsignaturas: AsignaturasService, private servicioCiclos: CiclosService, private ruta: Router) { }

  asignaturasDam: AsignaturasInterfaz[] = [];
  asignaturasDaw: AsignaturasInterfaz[] = [];
  ciclosDam: CiclosInterfaz[] = [];
  ciclosDaw: CiclosInterfaz[] = [];

  ngOnInit(): void {
    this.asignaturasDam = this.servicioAsignaturas.getAsignaturasDam();
    this.asignaturasDaw = this.servicioAsignaturas.getAsignaturasDaw();
    this.ciclosDam = this.servicioCiclos.getCiclosDam();
    this.ciclosDaw = this.servicioCiclos.getCiclosDaw();
  }

  navegar(curso: number, nombre: string){
    this.ruta.navigate(["cicloDetalle", curso, nombre])
  }

  navegarUno(input1: string){
    this.ruta.navigate(["uno", input1]);
  }

}

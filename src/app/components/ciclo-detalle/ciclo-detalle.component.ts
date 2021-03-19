import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { AsignaturasService } from './../../services/asignaturas.service';
import { CiclosService } from './../../services/ciclos.service';
import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-detalle',
  templateUrl: './ciclo-detalle.component.html',
  styleUrls: ['./ciclo-detalle.component.css']
})
export class CicloDetalleComponent implements OnInit {

  curso: number = 0;
  nombre: string = "";
  ciclo: CiclosInterfaz = {nombre:"", curso:0, asignaturas:[], imagen:""};
  conocimientos: string[] = [];
  asignaturas: AsignaturasInterfaz[] = [];

  constructor(private rutaActiva: ActivatedRoute, private servicioCiclos: CiclosService, private servicioAsignaturas: AsignaturasService) { }

  ngOnInit(): void {
    this.curso = this.rutaActiva.snapshot.params.curso;
    this.nombre = this.rutaActiva.snapshot.params.nombre;
    
    this.servicioCiclos.getCiclos().forEach(ciclo => {
      if(ciclo.curso == this.curso){
        if(ciclo.nombre == this.nombre){
          this.ciclo = ciclo;
        }
      }
    });
    if(this.nombre == "DAM"){
      if(this.curso == 1){
        this.asignaturas = this.servicioAsignaturas.getAsignaturasDam1();
        this.conocimientos = this.servicioAsignaturas.getConocimientosDam1();
      }else{
        this.asignaturas = this.servicioAsignaturas.getAsignaturasDam2();
        this.conocimientos = this.servicioAsignaturas.getConocimientosDam2();
      }
    }else{
      if(this.curso == 1){
        this.asignaturas = this.servicioAsignaturas.getAsignaturasDaw1();
        this.conocimientos = this.servicioAsignaturas.getConocimientosDaw1();
      }else{
        this.asignaturas = this.servicioAsignaturas.getAsignaturasDaw2();
        this.conocimientos = this.servicioAsignaturas.getConocimientosDaw2();
      }
      
    }
    console.log(this.asignaturas[0].conocimientos);
    

  }


}

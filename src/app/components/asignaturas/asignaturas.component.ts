import { AsignaturasService } from './../../services/asignaturas.service';
import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas: AsignaturasInterfaz[] = [];
  asignaturasFiltradas: AsignaturasInterfaz[] = [];

  constructor(private servicioAsignaturas: AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturas = this.servicioAsignaturas.getAllAsignaturas();
    this.asignaturasFiltradas = this.asignaturas;
  }

  filtrar(nombre: string, ciclo: string, conocimiento: string){
    this.asignaturasFiltradas = [];
    
    this.asignaturas.forEach(asignatura => {
      if(nombre == ""){
        if(ciclo == ""){
          if(conocimiento == ""){
            this.asignaturasFiltradas = this.asignaturas;
          }else{
            let x = 0;
            asignatura.conocimientos.forEach(conocimiento2 => {
              if(conocimiento2.nombre.toLowerCase().includes(conocimiento.toLowerCase())){
                x++;
              }
            });
            if(x>0){
              this.asignaturasFiltradas.push(asignatura);
            }
          }
        }else{
          if(asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())){
            if(conocimiento == ""){
              this.asignaturasFiltradas.push(asignatura)
            }else{
              let x = 0;
              asignatura.conocimientos.forEach(conocimiento2 => {
                if(conocimiento2.nombre.toLowerCase().includes(conocimiento.toLowerCase())){
                  x++;
                }
              });
              if(x>0){
                this.asignaturasFiltradas.push(asignatura);
              }
            }
          }
        }
      }else{
        if(asignatura.nombre.toLowerCase().includes(nombre.toLowerCase())){
          if(asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())){
            if(conocimiento == ""){
              this.asignaturasFiltradas.push(asignatura)
            }else{
              let x = 0;
              asignatura.conocimientos.forEach(conocimiento2 => {
                if(conocimiento2.nombre.toLowerCase().includes(conocimiento.toLowerCase())){
                  x++;
                }
              });
              if(x>0){
                this.asignaturasFiltradas.push(asignatura);
              }
            }
          }else{
            if(asignatura.ciclo == ""){
              if(conocimiento == ""){
                this.asignaturasFiltradas.push(asignatura)
              }else{
                let x = 0;
                asignatura.conocimientos.forEach(conocimiento2 => {
                  if(conocimiento2.nombre.toLowerCase().includes(conocimiento.toLowerCase())){
                    x++;
                  }
                });
                if(x>0){
                  this.asignaturasFiltradas.push(asignatura);
                }
              }
            }
          }
        }
      }
    });
  }
      

}

import { CiclosInterfaz } from './../utils/CiclosInterfaz';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  ciclos: CiclosInterfaz[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
  ];

  constructor() { }

  getCiclosDam(){
    return this.ciclos.filter((ciclo)=>{
      return ciclo.nombre.includes("DAM"); //ESTE RETURN METE DENTRO EL ELEMENTO QUE CUMPLA EL FILTRO
    });
  }

  getCiclosDaw(){
    return this.ciclos.filter((ciclo)=>{
      return ciclo.nombre.includes("DAW"); //ESTE RETURN METE DENTRO EL ELEMENTO QUE CUMPLA EL FILTRO
    });
  }

  getCiclos(){
    return this.ciclos;
  }
}

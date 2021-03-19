import { ConocimientosInterfaz } from './../utils/ConocimientosInterfaz';
import { AsignaturasInterfaz } from './../utils/AsignaturasInterfaz';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  asignaturas: AsignaturasInterfaz[] = [
    {
      nombre: 'Sistemas informáticos',
      profesor: 'Isaac Sampedro',
      conocimientos: [
        { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
        { nombre: 'windows', imagen: 'assets/images/win.png' },
        { nombre: 'linux', imagen: 'assets/images/linux.png' },
        { nombre: 'virtualizacion', imagen: 'assets/images/virtual.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Programación',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'java', imagen: 'assets/images/java.png' },
        { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Bases de datos',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
        { nombre: 'sqlserver', imagen: 'assets/images/sql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Lenguajes de Marcas',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'html', imagen: 'assets/images/xml.jpg' },
        { nombre: 'xml', imagen: 'assets/images/html.jpeg' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Entornos de desarrollo',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
        { nombre: 'scrum', imagen: 'assets/images/scrum.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Empresa e Iniciativa emprendedora',
      profesor: 'Marta Jimenez',
      conocimientos: [
        { nombre: 'emprender', imagen: 'assets/images/empresa.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Inglés',
      profesor: 'Rocio',
      conocimientos: [{ nombre: 'ingles', imagen: 'assets/images/ingles.jpg' }],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Programación Multimedia y Dispositivos Moviles',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'java', imagen: 'assets/images/java.png' },
        { nombre: 'xml', imagen: 'assets/images/xml.jpg' },
        { nombre: 'json', imagen: 'assets/images/json.png' },
      ],
      ciclo: 'DAM ',
      curso: 2,
    },
    {
      nombre: 'Desarrollo de interfaces',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'java', imagen: 'assets/images/java.png' },
        { nombre: 'javafx', imagen: 'assets/images/javafx.jpg' },
        { nombre: 'json', imagen: 'assets/images/json.png' },
        { nombre: 'js', imagen: 'assets/images/js.jpg' },
        { nombre: 'angular', imagen: 'assets/images/angular.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Acceso a Datos',
      profesor: 'Hector Alonso',
      conocimientos: [
        { nombre: 'java', imagen: 'assets/images/java.png' },
        { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
        { nombre: 'mongo', imagen: 'assets/images/mongo.jpg' },
        { nombre: 'php', imagen: 'assets/images/php.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Programacion de servicios y procesos',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'seguridad', imagen: 'assets/images/seguridad.jpg' },
        { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Sistemas de gestión empresarial',
      profesor: 'Hector Alonso',
      conocimientos: [
        { nombre: 'erp', imagen: 'assets/images/erp.jpg' },
        { nombre: 'odoo', imagen: 'assets/images/odoo.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'js', imagen: 'assets/images/js.jpg' },
        { nombre: 'react', imagen: 'assets/images/react.png' },
        { nombre: 'webpack', imagen: 'assets/images/webpack.jpg' },
        { nombre: 'node', imagen: 'assets/images/node.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
      profesor: 'David Ventura',
      conocimientos: [
        { nombre: 'php', imagen: 'assets/images/php.png' },
        { nombre: 'node', imagen: 'assets/images/node.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Despliegue de Aplicaciones',
      profesor: 'Jesus Nuño',
      conocimientos: [
        { nombre: 'apache', imagen: 'assets/images/apache.jpeg' },
        { nombre: 'tomcat', imagen: 'assets/images/tomcat.png' },
        { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo de Interfaces Web',
      profesor: 'Victor Martín',
      conocimientos: [
        { nombre: 'xml', imagen: 'assets/images/xml.jpg' },
        { nombre: 'bootstrap', imagen: 'assets/images/boots.png' },
        { nombre: 'diseño', imagen: 'assets/images/disenio.jpg' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
  ];

  asignaturasDam: AsignaturasInterfaz[] = this.getAsignaturasDam();
  asignaturasDaw: AsignaturasInterfaz[] = this.getAsignaturasDaw();

  getAllAsignaturas(){
    return this.asignaturas;
  }

  getAsignaturasDam(){
    return this.asignaturas.filter((asignatura)=>{
      return asignatura.ciclo.includes("DAM"); //ESTE RETURN METE DENTRO EL ELEMENTO QUE CUMPLA EL FILTRO
    });
  }

  getAsignaturasDaw(){
    return this.asignaturas.filter((asignatura)=>{
      return asignatura.ciclo.includes("DAW"); //ESTE RETURN METE DENTRO EL ELEMENTO QUE CUMPLA EL FILTRO
    });
  }

  getAsignaturasDam1(){
    let asignaturasDam1: AsignaturasInterfaz[] = [];
    this.asignaturasDam.forEach(asignatura => {
      if(asignatura.curso == 1){
        asignaturasDam1.push(asignatura);
      }
    });
    return asignaturasDam1;
  }

  getAsignaturasDam2(){
    let asignaturasDam2: AsignaturasInterfaz[] = [];
    this.asignaturasDam.forEach(asignatura => {
      if(asignatura.curso == 2){
        asignaturasDam2.push(asignatura);
      }
    });
    return asignaturasDam2;
  }

  getAsignaturasDaw1(){
    let asignaturasDaw1: AsignaturasInterfaz[] = [];
    this.asignaturasDaw.forEach(asignatura => {
      if(asignatura.curso == 1){
        asignaturasDaw1.push(asignatura);
      }
    });
    return asignaturasDaw1;
  }

  getAsignaturasDaw2(){
    let asignaturasDaw2: AsignaturasInterfaz[] = [];
    this.asignaturasDaw.forEach(asignatura => {
      if(asignatura.curso == 2){
        asignaturasDaw2.push(asignatura);
      }
    });
    return asignaturasDaw2;
  }

  getConocimientosDam1(){
    let conocimientosDam1: string[] = [];
    this.asignaturasDam.forEach(asignatura => {
      if(asignatura.ciclo.includes("DAM")){
        if(asignatura.curso == 1){
          asignatura.conocimientos.forEach(conocimiento => {
            if(conocimientosDam1.includes(conocimiento.nombre)){
              //YA ESTA DENTRO
            }else{
              conocimientosDam1.push(conocimiento.nombre);
            }
          });
        }
      }
    });
    return conocimientosDam1;
  }

  getConocimientosDam2(){
    let conocimientosDam2: string[] = [];
    this.asignaturasDam.forEach(asignatura => {
      if(asignatura.ciclo.includes("DAM")){
        if(asignatura.curso == 2){
          asignatura.conocimientos.forEach(conocimiento => {
            if(conocimientosDam2.includes(conocimiento.nombre)){
              //YA ESTA DENTRO
            }else{
              conocimientosDam2.push(conocimiento.nombre);
            }
          });
        }
      }
    });
    return conocimientosDam2;
  }

  getConocimientosDaw1(){
    let conocimientosDaw1: string[] = [];
    this.asignaturasDaw.forEach(asignatura => {      
      if(asignatura.ciclo.includes("DAW")){
        if(asignatura.curso == 1){
          asignatura.conocimientos.forEach(conocimiento => {
            if(conocimientosDaw1.includes(conocimiento.nombre)){
              //YA ESTA DENTRO
            }else{
              conocimientosDaw1.push(conocimiento.nombre);
            }
          });
        }
      } 
    });
    //console.log(conocimientosDaw1);
    return conocimientosDaw1;
  }

  getConocimientosDaw2(){
    let conocimientosDaw2: string[] = [];
    this.asignaturasDaw.forEach(asignatura => {
      if(asignatura.ciclo.includes("DAW")){
        if(asignatura.curso == 2){
          asignatura.conocimientos.forEach(conocimiento => {
            if(conocimientosDaw2.includes(conocimiento.nombre)){
              //YA ESTA DENTRO
            }else{
              conocimientosDaw2.push(conocimiento.nombre);
            }
          });
        }
      }
    });
    return conocimientosDaw2;
  }

  constructor() { }
}

import { AsignaturasInterfaz } from './AsignaturasInterfaz';
export interface CiclosInterfaz{

    nombre: string,
    curso: number,
    asignaturas: AsignaturasInterfaz[],
    imagen: string
    
}
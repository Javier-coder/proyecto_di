import { ConocimientosInterfaz } from './ConocimientosInterfaz';
export interface AsignaturasInterfaz{

    nombre: string,
    profesor: string,
    conocimientos: ConocimientosInterfaz[],
    ciclo: string,
    curso: number,

    
}
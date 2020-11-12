import { Time } from '@angular/common';

export interface Transacciones{
    fecha: Date;
    billetera: string;
    dinero_a_enviar: number;
    dinero_a_recibir: number;
    tipo_de_cambio: number;
    ganancia: number;
    imagen: string;
}
import { Component, OnInit } from '@angular/core';
import { Transacciones } from './transacciones';

@Component({
  selector: 'app-atm-transacciones',
  templateUrl: './atm-transacciones.component.html',
  styleUrls: ['./atm-transacciones.component.scss']
})
export class AtmTransaccionesComponent implements OnInit {

  constructor() { }

  transacciones: Transacciones[] =  [
    {
    fecha: new Date(1390272893353),
    billetera: "Paypal",
    dinero_a_enviar: 10,
    dinero_a_recibir: 17,
    tipo_de_cambio: 1.17,
    ganancia: 5,
    imagen: "assets/img/paypal.png",
  },
  {
    fecha: new Date(1390272893353),
    billetera: "Payoneer",
    dinero_a_enviar: 15,
    dinero_a_recibir: 19,
    tipo_de_cambio: 1.05,
    ganancia: 2,
    imagen: "assets/img/paypal.png",
  },
];

  ngOnInit(): void {
  }

}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progresoUno: number = 25;
  progresoDos: number = 15;

  get porcentajeUno() {
    return `${this.progresoUno}%`;
  }

  get porcentajeDos() {
    return `${this.progresoDos}%`;
  }

  cambioValorHijo(valor: number) {
    console.log(valor);
  }
}

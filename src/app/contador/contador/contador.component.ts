import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      El valor de la base: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}

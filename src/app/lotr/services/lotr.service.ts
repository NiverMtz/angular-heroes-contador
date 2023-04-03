import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/lotr.interface';

@Injectable()
export class LOTRService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Frodo',
      poder: 1000,
    },
    {
      nombre: 'Sauron',
      poder: 2000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }

}

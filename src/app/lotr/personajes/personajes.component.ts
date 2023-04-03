import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/lotr.interface';
import { LOTRService } from '../services/lotr.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // @Input()
  // personajes: Personaje[] = [];

  get personajes() {
    return this.lotrService.personajes;
  }

  constructor( private lotrService: LOTRService) {}
}

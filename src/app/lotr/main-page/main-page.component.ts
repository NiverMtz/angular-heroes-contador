import { Component } from '@angular/core';
import { Personaje } from '../interfaces/lotr.interface';
import { LOTRService } from '../services/lotr.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Galadriel',
    poder: 12000
  }

  constructor() {}
}

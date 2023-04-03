import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/lotr.interface';
import { LOTRService } from '../services/lotr.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html'
})
export class AgregarPersonajeComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private lotrService: LOTRService) {}

  // @Output() 
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(): void {
    if(this.nuevo.nombre.trim().length === 0) {return;}

    // this.onNuevoPersonaje.emit( this.nuevo )
    this.lotrService.agregarPersonaje( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}

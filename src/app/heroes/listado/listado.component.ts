import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Wanda', 'Vision'];
  borrado: string = '';
  mensajeBorrado: string = 'No ha borrado nada';
  
  eliminarHeroe(): void {
    this.borrado = this.heroes.shift() || ''
    this.mensajeBorrado_SET()
  }

  mensajeBorrado_SET(): void {
    this.mensajeBorrado = !this.heroes ? 'No ha borrado nada' : 'Ya borró todos'
  }
}

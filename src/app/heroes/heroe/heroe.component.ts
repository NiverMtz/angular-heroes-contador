import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponet {
    nombre: string = "IronMan";
    edad: number = 34;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 45
    }
}
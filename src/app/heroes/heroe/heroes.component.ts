import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroes.component.html'
})
export class HeroeComponent{

    nombre: string = 'Goku';
    edad: number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string { 
        
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{ 
        
        this.nombre = 'Krillin';
    }

    cambiarEdad(): void{ 
        
        this.edad = 10;
    }

}
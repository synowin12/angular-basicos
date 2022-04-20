import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iron Man','Naruto','Piccoro'];
  heroeBorrado: string='';  
  borrarHeroe(){
    this.heroeBorrado= this.heroes.pop() || '';

  }


}

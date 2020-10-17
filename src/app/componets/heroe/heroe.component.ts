import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router'; // para escuchar 
                                        /*parametros desde mi pagina*/


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
	heroe : any = {};

  constructor(private _activatedRoute : ActivatedRoute,
              private _heroesService : HeroesService ) {

/*      paara escuchar el parametro*/
      this._activatedRoute.params.subscribe (params => {
        /*console.log (params ['id']);*/
        this.heroe = this._heroesService.get_heroe( params ['id']);
      })
  }

 
/* -----> tiene que ser un servicio
  mostrarHeroe( index : number){
  	console.log ( this.variable [ index ] );
  }*/
}

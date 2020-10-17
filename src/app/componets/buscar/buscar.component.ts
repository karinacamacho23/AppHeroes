import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

	arrHero: Heroe[] = [];
  term : string;
  mensaje : string;

  	constructor(private _activatedRoute : ActivatedRoute,
                private _heroesServ:HeroesService,
                private _route : Router
  	) { }


  ngOnInit(): void {
  	this._activatedRoute.params.subscribe ( params =>{
      this.term = params[ 'termino'];
      this.arrHero = this._heroesServ.buscar_heroes(params ['termino']);
      console.log ( this.arrHero );
      
    })
  }


  verHeroe ( index: number) {
    
    this._route.navigate ([ '/heroe', index ]);
  }
}
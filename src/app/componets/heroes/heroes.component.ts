import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe} from '../../servicios/heroes.service';
import { Router } from '@angular/router';
/*import { RouterConfig } from '@angular/router';*/

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  
})

export class HeroesComponent implements OnInit {

	hero:Heroe[] = [];

  	constructor(private _heroeService:HeroesService,
                private _router : Router
      ) {

	}




	ngOnInit(): void {
  		this.hero = this._heroeService.get_heroes();
  		/*console.log (this.hero);*/
  }


  verHeroe ( index : number ) {
    this._router.navigate ([ '/heroe', index ]);
  }
}
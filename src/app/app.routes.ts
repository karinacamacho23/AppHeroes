import { RouterModule, Routes }from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { HeroeComponent } from './componets/heroe/heroe.component';
import { BuscarComponent } from './componets/buscar/buscar.component';


const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'heroe/:id', component: HeroeComponent },
	{ path: 'buscar/:termino', component: BuscarComponent },
	{ path: '**', pathMatch:'full', redirectTo:'home'}
] 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

    /*Rutas*/
import { APP_ROUTING } from './app.routes';    


  /*componentes*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/shared/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { HeroesComponent } from './componets/heroes/heroes.component';


  /*Servicios*/
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './componets/heroe/heroe.component';
import { BuscarComponent } from './componets/buscar/buscar.component';
import { HeroeTarjetaComponent } from './componets/heroe-tarjeta/heroe-tarjeta.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent,
    HeroeTarjetaComponent
  
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroInformationComponent } from './components/hero-information/hero-information.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HerosComponent },
    { path: 'heroInformation/:id', component:  HeroInformationComponent},
    { path: 'buscarHeroe/:termino', component:  BuscarHeroeComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
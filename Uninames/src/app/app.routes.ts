import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**',pathMatch:'full', component: HomeComponent },
];

export const appRouting = RouterModule.forRoot(routes);

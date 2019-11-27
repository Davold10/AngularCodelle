import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    { path: 'LogIn', component: LogInComponent },
    { path: 'Register', component: RegisterComponent },
    { path: '**', pathMatch:'full', redirectTo: 'LogIn' }
];

export const appRouting = RouterModule.forRoot(routes);
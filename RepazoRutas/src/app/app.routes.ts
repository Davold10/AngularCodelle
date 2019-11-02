import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductsMainComponent } from './components/products-main/products-main.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsMainComponent },
    { path: 'productInfo/:id', component: ProductInfoComponent },
    { path: 'productSearch/:term', component: ProductSearchComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
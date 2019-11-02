import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsMainComponent } from './components/products-main/products-main.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { appRouting } from './app.routes';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent,
    HomeComponent,
    ProductsMainComponent,
    ProductInfoComponent,
    ProductSearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

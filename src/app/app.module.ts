import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AddProductsComponent,
    NavbarComponent,
    ProductDetailsComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule,


    ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

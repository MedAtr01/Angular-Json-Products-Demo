import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {AddProductsComponent} from "./add-products/add-products.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"navbar", component: NavbarComponent},
  {path: "products", component: ProductsComponent},
  {path: "addProduct", component: AddProductsComponent},
  {path: "productDetails/:name", component: ProductDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

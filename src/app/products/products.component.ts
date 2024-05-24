import {Component, OnInit} from '@angular/core';
import {ImageVariant, Product} from "./products";
import {ProductsServiceService} from "../products-service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : Product[]=[];
  errorMessage: string | null = null;
  loading: boolean = false;
  variants: ImageVariant[] = [];



  constructor(private productService: ProductsServiceService) {}

  ngOnInit(): void {
    this.products
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load products. Please try again later.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  protected readonly Image = Image;
}

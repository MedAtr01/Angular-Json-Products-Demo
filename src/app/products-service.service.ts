import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {ImageVariant, MemoryOption, Product} from "./products/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
public  baseUrl = "assets/productsApi.json";
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map(item => new Product(item)))
    );

  }
  getProductVariants(name: string): Observable<ImageVariant[]> {
    return this.getProducts().pipe(
      map((products: Product[]) => {
        const product = products.find(p => p.name === name);
        return product ? product.variants : [];
      }),
      catchError(error => {
        console.error('Error fetching product variants', error);
        return of([]);
      })
    );
  }
getProductMemory(name:string): Observable<MemoryOption[]>{
    return this.getProducts().pipe(
      map((products:Product[]) =>{
        const product = products.find(p=>p.name===name);
        return product ? product.memory : [];
        }
      ),
      catchError(error => {
        console.error('Error fetching product memory', error);
        return of([]);
      })
    );



}


}

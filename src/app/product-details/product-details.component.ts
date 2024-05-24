import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsServiceService} from "../products-service.service";
import {ImageVariant, MemoryOption} from '../products/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  variants: ImageVariant[] = [];
  memory: MemoryOption[] = [];
  productName: string = '';
  selectedVariant: ImageVariant | null = null;
  activeColor: string = '';
  selectedMemory: MemoryOption | null = null;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsServiceService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productName = params.get('name') || '';
      this.loadVariants();
    });
  }

  loadVariants(): void {
    if (this.productName) {
      this.productService.getProductVariants(this.productName).subscribe(
        (variants: ImageVariant[]) => {
          this.variants = variants;
          if (this.variants.length > 0) {
            this.selectedVariant = this.variants[0];
            this.activeColor = this.variants[0].color;
            if (this.selectedVariant.memory.length > 0) {
              this.selectedMemory = this.selectedVariant.memory[0]; // Default to the first memory option
            }
          }
        },
        error => {
          console.error('Error loading product variants', error);
        }
      );
    }

}
// loadMemory():void {
//   if (this.productName) {
//     this.productService.getProductMemory(this.productName).subscribe(
//       (memory: MemoryOption[]) => {
//         this.memory = memory;
//       }
//     );
//   }
// }
  showVariantInfo(variant: ImageVariant): void {
    this.selectedVariant = variant;
    this.activeColor = variant.color;
    if (variant.memory.length > 0) {
      this.selectedMemory = variant.memory[0]; // Reset to the first memory option of the new variant
    } else {
      this.selectedMemory = null;
    }
  }
  selectMemory(memory: MemoryOption): void {
    this.selectedMemory = memory;
  }
}

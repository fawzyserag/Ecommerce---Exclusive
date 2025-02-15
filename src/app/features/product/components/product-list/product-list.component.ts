import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductInterface } from '../../models/product-interface';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  allProducts: ProductInterface[] = [];
  private readonly productService = inject(ProductServiceService);

  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: ({ data }) => {
        this.allProducts = data;
      },
    });
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
}

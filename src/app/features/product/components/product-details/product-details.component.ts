import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductInterface } from '../../models/product-interface';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productId!: string | null;
  productDetails: ProductInterface = {} as ProductInterface;
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductServiceService);

  getProdId() {
    this.activatedRoute.paramMap.subscribe({
      next: (urlData) => {
        this.productId = urlData.get('id');
      },
    });
  }

  getProductDetails(id: string | null) {
    this.productService.getProductDetails(id).subscribe({
      next: ({ data }) => {
        this.productDetails = data;
      },
    });
  }

  ngOnInit(): void {
    this.getProdId();
    this.getProductDetails(this.productId);
  }
}

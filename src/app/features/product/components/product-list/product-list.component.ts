import { Component, Inject, inject } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductInterface } from '../../models/product-interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
[x: string]: any;
  allProducts: ProductInterface[] = [];
  private readonly productService = inject(ProductServiceService);
  private readonly cartService = inject(CartService);
  private readonly toastr = inject(ToastrService);
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: ({ data }) => {
        this.allProducts = data;
      },
    });
  }
  showToastr(msg: string) {
    this.toastr.success(msg, '', {
      progressBar: true,
      timeOut: 1500,
    });
  }
  addProductToCart(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.showToastr('Product added successfully');
        this.cartService.cartCounter.next(res.numOfCartItems);
      },
    });
  }
}

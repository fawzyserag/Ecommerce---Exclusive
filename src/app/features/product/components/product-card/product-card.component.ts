import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductInterface } from '../../models/product-interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../cart/services/cart.service';
import { ProductServiceService } from '../../services/product-service.service';
import { WishService } from '../../../wishlist/services/wish.service';


@Component({
  selector: 'app-product-card',
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  constructor(private Product:ProductServiceService ,private cart:CartService, private toastr: ToastrService,private wish:WishService ){}
  @Input() product!: ProductInterface;
  @Output() addToCart = new EventEmitter<string>()
  onAddToCart(){
    this.addToCart.emit(this.product._id)
  }
  addToWishlist(productId: string) {
  this.wish.addProduct(productId).subscribe({
    next: (res) => {
      this.toastr.success('Added to wishlist ❤️', '', {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing',
      });

      console.log(res);

      // لو الـ API بيرجع عدد المنتجات
      if (res.numOfWishlistItems !== undefined) {
        this.wish.wishlistCount.next(res.numOfWishlistItems);
      }

      // لو بيرجع البيانات نفسها
      if (res.data) {
        this.wish = res.data;
      }
    },
    error: (err) => {
      console.error(err);
      this.toastr.error(
        err.error?.message || 'Failed to add to wishlist',
        '',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing',
        }
      );
    },
  });
}

}

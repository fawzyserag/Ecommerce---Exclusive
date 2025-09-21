import { Component, OnInit } from '@angular/core';
import { WishService } from '../../services/wish.service';
import { CurrencyPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../cart/services/cart.service'; // ✨ لو عندك كارت سيرفس
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  imports: [CurrencyPipe, UpperCasePipe, NgIf, NgFor,RouterLink],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishlistComponent implements OnInit {
  wishList: any[] = [];

  constructor(
    private wishService: WishService,
    private toastr: ToastrService,
    private cartService: CartService // ✨ عشان نضيف للكارت
  ) {}

  ngOnInit(): void {
    this.wishService.wishlistItems.subscribe((items) => (this.wishList = items));
  }

  loadWishlist(): void {
    this.wishService.getProduct().subscribe({
      next: (res: any) => {
        if (res?.data) {
          this.wishList = res.data;
        }
      },
      error: (err) => {
        console.error('Error loading wishlist:', err);
      },
    });
  }

  removeFromWishlist(productId: string): void {
    this.wishService.removeProduct(productId).subscribe({
      next: (res: any) => {
        this.wishList = this.wishList.filter((item) => item._id !== productId);

        if (res?.numOfWishlistItems !== undefined) {
          this.wishService.wishlistCount.next(res.numOfWishlistItems);
        }

        this.toastr.success('Item removed from wishlist');
      },
      error: (err) => {
        console.error('Error removing item from wishlist:', err);
      },
    });
  }

  clearAll(): void {
    this.wishList = []; // ✨ امسح الليستة من الـ UI
    this.toastr.warning('Wishlist cleared');
    // مفيش endpoint عندك → لو عملت endpoint بعدين ضيفه هنا
  }

  // ✨ إضافة منتج للكارت
  onAddToCart(productId: string): void {
    this.cartService.addProductToCart(productId).subscribe({
      next: () => {
        this.toastr.success('Item added to cart');
      },
      error: (err) => {
        console.error('Error adding item to cart:', err);
        this.toastr.error('Failed to add item to cart');
      },
    });
  }

  trackById(index: number, item: any): any {
    return item._id || item.id || index;
  }
}

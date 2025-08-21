import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.interface';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  imports: [RouterLink, CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent {
  cartDetails: Cart = {} as Cart;
  isLoading: boolean = false;
  private readonly cartService = inject(CartService);

  ngOnInit(): void {
    this.loadCart();
  }
  loadCart() {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartDetails = res;
        this.isLoading = true;
      },
    });
  }
  removeProduct(id: string) {
    this.cartService.removeCartItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res;
        this.cartService.cartCounter.next(res.numOfCartItems);
      },
    });
  }
  updateQty(id: string, count: number) {
    this.cartService.updateCartQuantity(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res;
      },
    });
  }
  clearCart() {
    this.cartService.clearCart().subscribe({
      next: (res) => {
        console.log(res);
        if (res.message == 'success') {
          this.loadCart();
        }
      },
    });
  }
}

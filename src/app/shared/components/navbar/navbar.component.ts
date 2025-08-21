import { Component, inject, input, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from '../../../core/auth/services/auth-service.service';
import { CartService } from '../../../features/cart/services/cart.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly auth = inject(AuthServiceService);
  private readonly cartService = inject(CartService);
  readonly layout = input.required<string>();
  private readonly platformId = inject(PLATFORM_ID);
  user: any;
  navbarCounter: number = 0;
  logout() {
    this.auth.logout();
  }

  ngOnInit() {
    console.log(this.auth.decodeToken());
    this.cartService.cartCounter.subscribe({
      next: (value) => {
        this.navbarCounter = value;
      },
    });

    if (isPlatformBrowser(this.platformId)) {
      this.cartService.getLoggedUserCart().subscribe({
        next: (res) => {
          this.cartService.cartCounter.next(res.numOfCartItems);
        },
      });
    }
  }
}

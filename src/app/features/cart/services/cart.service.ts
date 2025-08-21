import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../../../core/auth/services/auth-service.service';
import { environments } from '../../../../environment/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  cartCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartNumber: any;
  constructor(private http: HttpClient, private auth: AuthServiceService) {}

  addProductToCart(productId: string): Observable<any> {
    return this.http.post(environments.baseUrl + 'cart', {
      productId,
    });
  }

  updateCartQuantity(productId: string, count: number): Observable<any> {
    return this.http.put(environments.baseUrl + 'cart/' + productId, {
      count,
    });
  }

  getLoggedUserCart(): Observable<any> {
    return this.http.get(environments.baseUrl + 'cart');
  }

  removeCartItem(productId: string): Observable<any> {
    return this.http.delete(environments.baseUrl + 'cart/' + productId);
  }

  clearCart(): Observable<any> {
    return this.http.delete(environments.baseUrl + 'cart');
  }
}

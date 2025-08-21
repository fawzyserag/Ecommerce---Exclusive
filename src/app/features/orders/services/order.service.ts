import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../../../core/auth/services/auth-service.service';
import { environments } from '../../../../environment/environment';
import { ToastPackage } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private auth: AuthServiceService) {}
  createCheckout(
    cartId: string | null,
    shippingAddress: { details: string; phone: string; city: string }
  ): Observable<any> {
    const returnUrl = '?url=http://localhost:4200';
    return this.http.post(
      environments.baseUrl + 'orders/checkout-session/' + cartId + returnUrl,
      {
        shippingAddress,
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environments } from '../../../../environment/environment';
import { AuthServiceService } from '../../../core/auth/services/auth-service.service';
import { isPlatformBrowser } from '@angular/common';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  updateProduct(productId: string, count: number) {
    throw new Error('Method not implemented.');
  }
  token: any;
  wishlsitNumber: any;
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) Id: object) {
    if (isPlatformBrowser(Id)) {
      this.token = { token: localStorage.getItem('userToken') || '' };
    }

    this.getProduct().subscribe({
      next: (res) => {},
    });
  }

  addProduct(productId: string): Observable<any> {
    return this.http.post(environments.baseUrl + 'wishlist/' + productId, {
      headers: this.token,
    });
  }

  getProduct(): Observable<any> {
    return this.http.get(environments.baseUrl + 'wishlist', {
      headers: this.token,
    });
  }

  // updateProduct(productId:string,count:number): Observable<any>{

  //   return this.http.put(${baseUrl.BaseUrl}/wishlist/${productId},
  //     {count:count}
  //     ,
  //     {headers:this.token}

  //   )

  // }

  removeProduct(productId: string): Observable<any> {
    return this.http.delete(environments.baseUrl + 'wishlist/' + productId, {
      headers: this.token,
    });
  }

  clearwishlist(): Observable<any> {
    return this.http.delete(environments.baseUrl + 'wishlist/', {
      headers: this.token,
    });
  }

  // CheckOut(wishlistId:string,payload:CheckOut):Observable<any>{
  //   return this.http.post(${baseUrl.BaseUrl}/orders/checkout-session/${wishlistId}?url=http://localhost:4200,{
  //     shappingaddress:payload
  //   }
  //   ,{headers:this.token}
  // );
}

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environments } from '../../../../environment/environment';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WishService {
  wishlistItems = new BehaviorSubject<any[]>([]);
  wishlistCount = new BehaviorSubject<number>(0);

  private token: string = '';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) Id: object) {
    if (isPlatformBrowser(Id)) {
      this.token = localStorage.getItem('userToken') || '';
    }

    this.loadWishlist();
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  }
// private getAuthHeaders(): HttpHeaders {
//   return new HttpHeaders({
//     token: this.token
//   });
// }

  loadWishlist(): void {
    this.http.get<any>(`${environments.baseUrl}wishlist`, { headers: this.getAuthHeaders() })
      .subscribe({
        next: (res) => {
          this.wishlistItems.next(res.data || []);
          this.wishlistCount.next(res.count || 0);
        },
        error: (err) => console.error(err),
      });
  }

  addProduct(productId: string): Observable<any> {
    return this.http.post<any>(
      `${environments.baseUrl}wishlist`,
      { productId },
      { headers: this.getAuthHeaders() }
    ).pipe(
      tap((res) => {
        this.wishlistItems.next(res.data || []);
        this.wishlistCount.next(res.data?.length || 0);
      })
    );
  }

  getProduct(): Observable<any> {
    return this.http.get<any>(`${environments.baseUrl}wishlist`, { headers: this.getAuthHeaders() });
  }

  removeProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${environments.baseUrl}wishlist/${productId}`, { headers: this.getAuthHeaders() })
    .pipe(
      tap((res) => {
        this.wishlistItems.next(res.data || []);
        this.wishlistCount.next(res.data?.length || 0);
      })
    );
  }

  // clearWishlist(): Observable<any> {
  //   return this.http.delete<any>(`${environments.baseUrl}wishlist`, { headers: this.getAuthHeaders() })
  //   .pipe(
  //     tap(() => {
  //       this.wishlistItems.next([]);
  //       this.wishlistCount.next(0);
  //     })
  //   );
  // }
  clearWishlist(): Observable<any> {
  return this.http.delete<any>(`${environments.baseUrl}wishlist`, { headers: this.getAuthHeaders() })
    .pipe(
      tap(() => {

          this.wishlistItems.next([]);
          this.wishlistCount.next(0);

      })
    );
}

}

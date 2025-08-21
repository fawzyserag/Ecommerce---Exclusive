import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { threadId } from 'worker_threads';
import { environments } from '../../../../environment/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private httpClient: HttpClient, private router: Router,@Inject(PLATFORM_ID) private platformId:object) {}

  register(data: any): Observable<any> {
    return this.httpClient.post(environments.baseUrl + 'auth/signup', data);
  }

  login(data: any): Observable<any> {
    return this.httpClient.post(environments.baseUrl + 'auth/signin', data);
  }

  saveToken(token: string): void {
    if (typeof localStorage != 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  isAuthenticated(): boolean {
    if (typeof localStorage != 'undefined') {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  decodeToken() {
    try {
      if (typeof localStorage != 'undefined') {
        const decoded = jwtDecode(localStorage.getItem('authToken')!);
        console.log(decoded);
      }
    } catch {
      this.logout();
    }
  }
}

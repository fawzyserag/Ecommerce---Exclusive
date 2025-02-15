import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';
import { environments } from '../../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private httpClient: HttpClient) {}

  register(data: any): Observable<any> {
    return this.httpClient.post(environments.baseUrl + 'auth/signup', data);
  }

  login(data: any): Observable<any> {
    return this.httpClient.post(environments.baseUrl + 'auth/signin', data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}
  getAllbrands(): Observable<any> {
    return this.http.get(environments.baseUrl + 'brands');
  }
  getspascificbrand(id: string): Observable<any> {
    return this.http.get(environments.baseUrl + `brands/${id}`);
  }
}

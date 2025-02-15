import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClinte:HttpClient) { }

  getProducts():Observable<any>{
    return this.httpClinte.get(environments.baseUrl+'products')
  }

  getProductDetails(id:string|null):Observable<any>{
    return this.httpClinte.get(environments.baseUrl+`products/${id}`)
  }
}

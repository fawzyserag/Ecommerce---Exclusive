import { Injectable } from '@angular/core';
import { environments } from '../../../../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http:HttpClient) { }
  getAllcategory():Observable<any>{
    return this.http.get(environments.baseUrl + 'categories')
  }
}

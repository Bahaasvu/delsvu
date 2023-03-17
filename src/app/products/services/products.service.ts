import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts() {
    return this.http.get(environment.baseApi +'products')
  }

  getAllCategories() {
    return this.http.get(environment.baseApi +'api/Categories')
  }
  getProductsByCategory(id:any) {
    return this.http.get(environment.baseApi +'api/GetCommditiesStoe?id='+id)
  }

  getProductById(id:any) {
    return this.http.get(environment.baseApi +'api/Commdities?id='+id)
  }
  gteStoresByCat(id:any) {
    return this.http.get(environment.baseApi +'api/GetStoresCat?id='+id)
  }
  gteMyOrder(id:any) {
    return this.http.get(environment.baseApi +'api/Orders?id='+id)
  }
  
}

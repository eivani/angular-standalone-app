import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.URl}/products`);
  }

  getProduct(id:number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.URl}/products/${id}`);
  }

  deleteProduct(id:number):Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.URl}/products/${id}`);
  }

  addProduct(product:IProduct):Observable<IProduct> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<IProduct>(`${this.URl}/products`, product, {headers:headers});
  }
}

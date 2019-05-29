import { Products } from '../models/Products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = "http://localhost:3000/products"

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get(this.url);
  }

  register(product: Products) {
    return this.httpClient.post(this.url, product); //Observable
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(product: Products) {
    return this.httpClient.put(`${this.url}/${product.id}`,product);
  }

  retrieveById(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

}

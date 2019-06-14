import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://localhost:3000/products";

  constructor(private httpClient:HttpClient) { }

  register(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(`${this.url}/register`, product); //express 

  }

  list():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.url}/list`); //express 
  }

  delete(id:number){
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.url}/retrieve/${id}`); //express
  }

  update(product:Product):Observable<Product>{
    return this.httpClient.put<Product>(`${this.url}/update/${product._id}`,product); //mongo
  }

}

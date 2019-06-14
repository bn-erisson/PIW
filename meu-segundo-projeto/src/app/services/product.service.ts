import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://localhost:3000/products";

  constructor(private httpClient:HttpClient) { }

  register(prod:Product):Observable<Product>{
    // return this.httpClient.post(this.url,prod); 
    return this.httpClient.post<Product>(`${this.url}/register`,prod);
  }

  // list(){
  //   return this.httpClient.get(this.url);  
  // }

  list():Observable<Product[]>{
    //return this.httpClient.get<User[]>(this.url);  //json-server
    return this.httpClient.get<Product[]>(`${this.url}/list`);  
  }

  delete(id:number){
    //return this.httpClient.delete(`${this.url}/${id}`);
    return this.httpClient.delete(`${this.url}/delete/${id}`);
  }

  retrieveById(id:number){
    //return this.httpClient.get(`${this.url}/${id}`);
    return this.httpClient.get<Product>(`${this.url}/retrieve/${id}`);
  }

  update(prod:Product){
    //return this.httpClient.put(`${this.url}/${prod.id}`,prod);
    return this.httpClient.put<Product>(`${this.url}/update/${prod.id}`,prod);
  }
}

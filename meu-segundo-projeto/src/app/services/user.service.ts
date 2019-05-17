import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient) { }

  url: string = 'http://localhost:3000/users';

  register(user: User){
    return this.httpClient.post(this.url, user); //Observable
  }

  list(){
    return this.httpClient.get(this.url); //Observable
  }

  delete(id: number) {
    this.httpClient.delete(`${this.url} / ${id}`);
  }

  retrieveById(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);

  }
}

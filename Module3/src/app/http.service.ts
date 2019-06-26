import { Injectable } from '@angular/core';
//1-import
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
//2-inject
  constructor(public httpClient : HttpClient) { }

 //3-implement
 getProduct(){
 	return this.httpClient.get('https://reqres.in/api/products')
}
}

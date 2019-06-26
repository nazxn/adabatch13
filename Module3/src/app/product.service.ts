import { Injectable } from '@angular/core';
import { Product } from './product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items : Product [] = [{
  	name: 'Sunglasses',
  	brand: 'Gentle Monster',
  	id: 2,
  	price: 450
  },
  {
  	name: 'Floral dress',
  	brand: 'Romand',
  	id: 3,
  	price: 100
  },
  {
  	name: 'Oxford shoes',
  	brand: 'Primark',
  	id: 4,
  	price: 99
  }
  ]
  //for ROUTING: product-detail, pasted from products.component.ts

  constructor() { }

  getProducts(){
  	return this.items
  }

  getProductById(id){


  	for (var i = 0; i < this.items.length; i++){

  		if (this.items[i]["id"]==id){
  			
  			return this.items[i]
  		}
  	}
  	return null
  	//easier method? look up @ FCC: Filter
  }
}

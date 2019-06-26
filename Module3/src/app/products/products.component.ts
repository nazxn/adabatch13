import { Component, OnInit } from '@angular/core';
import { Product } from '../product'; //NOTE!
import { ProductService } from '../product.service' // for ROUTING, step ... : product-detail; INJECT!
import { Router } from '@angular/router'; // for ROUTING, step 8: product detail component ; INJECT!
//1-import
import { HttpService } from '../http.service' // to use http module

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name = 'Al';
  phoneNumber = '0154785621';

  selectedProduct // creating a variable called selectedProduct
  apiProducts // creating a new variable

    newTshirt : Product = {
   	name: 'Polo round neck',
   	brand: 'Polo',
   	id: 1,
   	price: 199
  // };
  // items : Product [] = [{
  // 	name: 'Sunglasses',
  // 	brand: 'Gentle Monster',
  // 	id: 2,
  // 	price: 450
  // },
  // {
  // 	name: 'Floral dress',
  // 	brand: 'Romand',
  // 	id: 3,
  // 	price: 100
  // },
  // {
  // 	name: 'Oxford shoes',
  // 	brand: 'Primark',
  // 	id: 4,
  // 	price: 99
  // }
  // // for ROUTING, step .. : product-detail component; cut and paste to product.service.ts!
  }
  items // for the product-detail routing ; productService

//2-inject
  constructor(public httpService:HttpService,
  // public router: Router) { } // for ROUTING, step 9: product detail ; INJECT!
  public productService: ProductService,
  public router:Router) {} // for ROUTING, step ..: product detail; INJECT!

//3-implement (aka the first method that will be executed after the page loads)
  ngOnInit() {
    this.items = this.productService.getProducts() // for ROUTING, step ..: product detail; IMPLEMENT!

  	this.httpService.getProduct().subscribe(resp=>{
  		console.log(resp)
  		this.apiProducts = resp["data"]
  	}, err=>{
  		console.log(err)
  	})
  }

  selectProduct(item){
  	// console.log(item)
  	// this.selectedProduct = item // when a user clicks on selectedProduct, item will come out
    // for ROUTING, step 7, product-detail ; cut this part in, and import above
    this.router.navigate(['product/'+item.id]) // for ROUTING, step 10: product detail ; IMPLEMENT!
  }

}

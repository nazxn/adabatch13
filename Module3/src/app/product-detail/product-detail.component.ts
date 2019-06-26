import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' // to get the item ID(1); for ROUTING, place-detail: IMPORT
import { ProductService } from '../product.service' // to get the item ID(2); for ROUTING, place-detail: IMPORT

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute, // to get the item ID; for ROUTING(1), place-detail: INJECT
  	public productService: ProductService) { } // to get the item ID; for ROUTING(2), place-detail: INJECT

  selectedProduct // for ROUTING, step 6: product detail component

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		console.log(params["id"]) // to get the item ID(1); for ROUTING, place-detail: IMPLEMENT
  		this.selectedProduct =
  		this.productService.getProductById(params["id"]) // to get the item ID(2); for ROUTING, place-detail: IMPLEMENT
  	})
  }

}

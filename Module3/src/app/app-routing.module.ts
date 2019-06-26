import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component'; // for ROUTING, step 1 (produts page)
import { AboutComponent } from './about/about.component'; // for ROUTING, step 1 (about page)
import { ContactComponent } from './contact/contact.component'; // for ROUTING, step 1 (contact page)
import { ProductDetailComponent } from './product-detail/product-detail.component' // for ROUTING, step 1 (product detail page)

const routes: Routes = [
{
	path: 'products', // for ROUTING, step 2 (products page)
	component: ProductsComponent // for ROUTING, step 2 (products page)
	// this will make it so that if the page is "www.adksha.com/product", this Product Component stuff will show up
},
{
	path: 'about', // for ROUTING, step 2 (about page)
	component: AboutComponent // for ROUTING, step 2 (about page)
},
{
	path: 'contact', // for ROUTING, step 2 (contact page)
	component: ContactComponent // for ROUTING, step 2 (contact page)
},
{
	// path: 'product-detail', // for ROUTING, step 2 (product detail page)
	// component: ProductDetailComponent // for ROUTING, step 2 (product detail page)
	path: 'product/:id',
	component: ProductDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

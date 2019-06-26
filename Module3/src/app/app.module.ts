import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // import form module
import { HttpClientModule } from '@angular/common/http'; // import Http Client Module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpService } from './http.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component' // import http service

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //import form module
    HttpClientModule //import http client module
  ],
  providers: [HttpService], //import http service
  bootstrap: [AppComponent]
})
export class AppModule { }

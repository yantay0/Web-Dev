import {Component, OnInit, Output} from '@angular/core';
import {Product, products} from "./products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  categories = ['All Categories','Electronics', 'Clothing', 'Home&Garden', 'Grocery','Beauty&Health']
  // images = ['https://resources.cdn-kaspi.kz/shop/static/main-nav/d9057c79-2b13-4bf7-ab6a-3458d3cf31ea-Grocery.png', ]
  _category?:string= this.categories[0];
  statusCategoryClicked = false;
  title = 'my-store';

  cart: Product[] = [];
  setCategory(category: string): void{
    this._category = category;
    console.log(this._category)
    this.statusCategoryClicked = true;
  }

  getCategory(): string
  {
    return <string>this._category;
  }

  ngOnInit(): void {
    console.log(this._category)
  }

  addToCart(product: Product): void{
    this.cart.push(product);
  }

}


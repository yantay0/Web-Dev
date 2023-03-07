import {Component, Input, OnInit} from '@angular/core';

import {Product, products, products as allProducts} from '../products';
import {ActivatedRoute} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  category?: string;
  filtered: Product[] = allProducts;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const categoryFromRoute = String(routeParams.get('category'));
      if(categoryFromRoute === 'All Categories'){
        console.log("s"+categoryFromRoute)
        return;
      }
      this.filtered = allProducts.filter((x) => x.category === categoryFromRoute);
    }
  ngOnChanges(): void {
   this.filtered = this.getProductByCategory(); // auto call by Angular when category's state is changed
    const routeParams = this.route.snapshot.paramMap;
    const categoryFromRoute = String(routeParams.get('category'));
    console.log(`1${categoryFromRoute}1`)
    this.filtered = allProducts.filter((x) => x.category === categoryFromRoute);
  }
  getProductByCategory() {
    if(this.category === "All Categories")
      return allProducts;
    return  allProducts.filter((x) => x.category === this.category)
  }
  share(product: Product) {
    const message = encodeURIComponent(`I'm sharing with you ${product.name}\n\n ${product.link}`);
    const telegramUrl = (`https://t.me/share/url?url=${message}`);
    window.open(telegramUrl);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }


  increaseNumberOfLikes(id: number) {
    let x = allProducts.find((x) => x.id == id);
    if(x) {
      x.numberOfLikes++;
    }
  }


}


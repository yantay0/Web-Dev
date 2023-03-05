import {Component, Input, OnInit} from '@angular/core';

import {Product, products as allProducts} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  @Input() category?: string;
  filtered?: Product[];

  ngOnInit(): void {
    this.filtered =  this.getProductByCategory();
  }
  ngOnChanges(): void {
   this.filtered = this.getProductByCategory(); // auto call by Angular when category's state is changed
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

}


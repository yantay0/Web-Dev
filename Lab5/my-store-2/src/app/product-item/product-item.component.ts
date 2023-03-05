import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product?: Product;
  @Output() remove = new EventEmitter();
  @Output() add = new EventEmitter();


  ngOnInit() : void {

  }

  addToCart(id: number) {

  }
  removeFromCart() {
    this.remove.emit(this.product);
  }

}

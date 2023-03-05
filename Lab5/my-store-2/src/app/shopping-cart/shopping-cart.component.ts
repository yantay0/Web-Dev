import { Component } from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  items :Product[] = [];


  clearCart () : Product[] {
    this.items = []
    return this.items;
  }

}

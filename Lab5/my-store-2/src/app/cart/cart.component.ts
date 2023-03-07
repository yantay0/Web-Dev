import {Component, Injectable} from '@angular/core';
import { CartService} from "../cart.service";
import {Product} from "../products";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ) {}

  removeItem(id: number) {
    this.items = this.items.filter((x) => x.id!==id);
    // this.cartService.removeItem(product.id);
  }


}

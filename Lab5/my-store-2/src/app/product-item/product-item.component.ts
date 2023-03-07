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


  ngOnInit() : void {

  }

  removeItem() {
    this.remove.emit(this.product?.id);
  }

}

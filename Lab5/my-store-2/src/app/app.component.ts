import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories = ['All Categories','Electronics', 'Clothing', 'Home&Garden', 'Grocery','Beauty&Health'];
  _category?: string | null;
  statusCategoryClicked = false;
  title = 'my-store';
  cart: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._category = params.get('category');
    });
  }

}

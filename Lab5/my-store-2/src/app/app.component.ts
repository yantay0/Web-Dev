import {Component, OnInit, Output} from '@angular/core';
import {products} from "./products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  categories = ['All Categories','Electronics', 'Clothing', 'Home&Garden', 'Grocery','Beauty&Health']
  _category?:string= this.categories[0];

  title = 'my-store';

  setCategory(category: string): void{
    this._category = category;
    console.log(this._category)
  }

  getCategory(): string
  {
    return <string>this._category;
  }

  ngOnInit(): void {
    console.log(this._category)
  }

}


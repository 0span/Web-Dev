import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {Product, products} from '../products'

export interface category{
  name: string;
}

export const categories = [
  {
    name : 'all'
  },
  {
    name : 'Phones'
  },
  {
    name : 'PC'
  },
  {
    name : 'TV'
  },
  {
    name : 'Headphones'
  }
]
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent {

  @Output() getCategory = new EventEmitter();
  productList : Product[] = []
  categories = [...categories]
  currentCategory :String =""

  getValue(buttonValue: string) {
    this.currentCategory = buttonValue

  }

}




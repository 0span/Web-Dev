import { Component } from '@angular/core';

import { products,Product } from '../products';
import { CategoryComponent } from '../category/category.component'
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {


  productss =[...products] ;
  productList: Product[]=[];
  category = ""

  getProduct(): Product[]{
    if(this.category ==='' || this.category==='all'){
      this.productList=[]
      for (let product of this.productss){
        this.productList.push(product)
      }
    }
    else {
      this.productList=[]
      for (let product of products){
        if(this.category === product.category)
        this.productList.push(product)
      }
    }
    return this.productList;
  }

  share() {
    window.alert('The product has been shared!');
  }
  onCategorySelected(categoryName: string) {
    this.category = categoryName
    // Do something with the selected category
  }
  deleteProduct(product: Product) {
    const index = this.productList.indexOf(product);
    if (index !== -1) {
      this.productList.splice(index, 1);
    }
    this.getProduct()
  }
  onNotify() {
    window.alert();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

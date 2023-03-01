import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  clicked: boolean = false;
  share(url: string) {
    window.open(url)
  }
  onNotify() {
    window.alert('Вас уведомят когда товар поступит в наличие');
  }
  like(id: number){
    if(products[id - 1].clicked == false){
      products[id - 1].clicked = true;
      products[id - 1].likes = products[id - 1].likes + 1;
    }
    else if(products[id - 1].clicked == true){
      products[id - 1].clicked = false;
      products[id - 1].likes = products[id - 1].likes - 1;
    }
  }
  // updateLike(likes: number, product: Product) {
  //   product.likes = likes;
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
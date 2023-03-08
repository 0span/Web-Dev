import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-photo',
  templateUrl: './product-photo.component.html',
  styleUrls: ['./product-photo.component.css']
})
export class ProductPhotoComponent {
  products = [...products];

}

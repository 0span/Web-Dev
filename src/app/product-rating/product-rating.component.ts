import { Component } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent {
  rating: number[] = [];

  likes: number = 0;

  getRating(value:number){
    this.rating.push(value);
  }
  getSum():string{
    if(this.rating.length == 0)
      return "0"
    let sum: number=0;
    for (let i of this.rating){
      sum+=i;
    }
    return (sum/(this.rating.length)).toPrecision(2);
  }
  getLike():number{
    return this.likes+=1;
  }
}

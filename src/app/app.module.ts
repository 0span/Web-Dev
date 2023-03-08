import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { ProductPhotoComponent } from './product-photo/product-photo.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import {AboutComponent} from "./about/about.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      {path: 'home', component: ProductListComponent},
      {path: 'products/:productId',component: ProductDetailsComponent},
      {path: 'cart', component:CartComponent},
      { path: 'shipping', component: ShippingComponent },
      {path: 'about', component: AboutComponent},
      { path: 'home/albums', component: AlbumsComponent},
      { path: 'albums/:id', component: AlbumDetailsComponent},
      { path: 'albums/:id/photos', component: AlbumPhotosComponent},
      // {path:'category',component: CategoryComponent},
      {path:'category/:category.name',component: ProductListComponent},
      {path: '', redirectTo:'home', pathMatch: "full"},

    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductRatingComponent,
    ProductPhotoComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoryComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    AlbumPhotosComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


// /*
// Copyright Google LLC. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at https://angular.io/license
// */
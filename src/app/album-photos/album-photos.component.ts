import { Component,OnInit } from '@angular/core';
import {photo} from "../products";
import {AlbumService} from "../album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  photos: photo[]
  id:number;
  constructor(private route:ActivatedRoute,private albumService:AlbumService) {
    this.photos = [];
    this.id = 0;
  }
  ngOnInit(){
    this.getPhotos()
  }
  getPhotos(){
    this.route.paramMap.subscribe((param)=>{
      this.id = Number(param.get('id'))
      this.albumService.getPhotos(this.id).subscribe((album)=>{
        this.photos = album
      })
    })

  }
}

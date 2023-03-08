import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";
import {album} from "../products";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  album :album
  newTitle : string = ""
  constructor(private route :ActivatedRoute , private albumService:AlbumService) {
    this.album = {} as album;
  }
  ngOnInit():void{
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'))
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album = album;
      })
    })
  }
  changeAlbum(){
    this.albumService.putAlbum(this.album,this.newTitle).subscribe((album)=>{
      this.album.title = album.title;
      this.newTitle = ""
    })
  }
}

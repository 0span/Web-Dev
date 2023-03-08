import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../album.service";
import {album} from "../products";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: album[]
  newAlbum: album
  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.newAlbum = {} as album
  }
  ngOnInit():void{
    this.getAlbums()
  }
  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) =>{
      this.albums = albums
    })
  }
  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album)=>{
      this.albums.push(album)
      this.newAlbum = {} as album
    })
  }
  deleteAlbum(album:album){

    this.albumService.deleteAlbum(album).subscribe(()=>{
      const index = this.albums.indexOf(album)
        this.albums.splice(index,1);
        })
  }
}

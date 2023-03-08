import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {album,photo} from "./products";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http : HttpClient) { }

  getAlbums():Observable<album[]>{
    return this.http.get<album[]>("https://jsonplaceholder.typicode.com/albums")
  }
  getAlbum(id: number):Observable<album>{
    return this.http.get<album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  getPhotos(id:number):Observable<photo[]>{
    return  this.http.get<photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
  addAlbum(album :album):Observable<album>{
    return this.http.post<album>("https://jsonplaceholder.typicode.com/albums", album)
  }
  putAlbum(album: album, s: string):Observable<album>{
    const body = {title: s} as album
    return this.http.put<album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`,body)
  }
  deleteAlbum(album: album):Observable<album>{
    return  this.http.delete<album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, AlbumPhotos} from "./modeles";

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

  BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) {
    // this.BASE_URL = 'https://jsonplaceholder.typicode.com';
  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumPhotos(albumId: number): Observable<AlbumPhotos[]> {
    return this.client.get<AlbumPhotos[]>(`${this.BASE_URL}/albums/${albumId}/photos`);
  }

}

import {Component, OnInit} from '@angular/core';
import {Album} from "../modeles";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  newAlbum: Album;
  loaded: boolean;
  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbum = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
    this.loaded = true;
  }
  addAlbum() {
    console.log(this.newAlbum);
  }

}

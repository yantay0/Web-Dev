import {Component, OnInit} from '@angular/core';
import {Album} from "../modeles";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: Album;
  loaded: boolean;

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbum = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
    this.loaded = true;
  }

  addAlbum() {
    if (!this.newAlbum || !this.newAlbum.title || this.newAlbum.title.length === 0) {
      alert("cannot add empty album");
      return;
    }
    this.loaded = false;
    this.albumsService.addAlbum(this.newAlbum).subscribe((album: Album) => {
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }

  deleteAlbum(id: number) {
    this.loaded = false;
    this.albumsService.deleteAlbum(id).subscribe((album: Album) => {
      // this.getAlbums();
      this.albums = this.albums.filter((x) => x.id!==id);
      this.loaded = true;
    })
  }

}


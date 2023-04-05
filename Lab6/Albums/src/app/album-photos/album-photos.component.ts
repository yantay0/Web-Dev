import {Component, OnInit} from '@angular/core';
import {Album, AlbumPhotos} from "../modeles";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {AlbumsComponent} from "../albums/albums.component";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{

  albumPhotos: AlbumPhotos[];
  loaded: boolean;


  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.albumPhotos = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getAlbumPhotos();
  }

  getAlbumPhotos() {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('id'))
      this.loaded = false;
      this.albumService.getAlbumPhotos(albumId).subscribe((albumPhotos) => {
        this.albumPhotos = albumPhotos;
      })
      this.loaded = true;
    })
  }
}



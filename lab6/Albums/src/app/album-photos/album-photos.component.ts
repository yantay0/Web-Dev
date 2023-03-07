import {Component, OnInit} from '@angular/core';
import {Album, AlbumPhotos} from "../modeles";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  albumId: number;
  albumPhotos: AlbumPhotos[];
  loaded: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.albumPhotos = [];
    this.albumId = {} as number;
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
        console.log("smsm")
        // (albumPhotos.forEach((x)=> console.log(x)));
      })
      this.loaded = true;
    })
  }
}



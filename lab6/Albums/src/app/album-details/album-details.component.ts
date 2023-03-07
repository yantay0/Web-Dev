import {Component, OnInit} from '@angular/core';
import {Album} from "../modeles";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album: Album;
  loaded: boolean;
  newTitle: string;
  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.album = {} as Album;
    this.newTitle = {}  as string;
    this.loaded = true;
  }

  ngOnInit() : void {
    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'))
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album: Album) => {
        this.album = album;
      })
      this.loaded = true;
    })
  }


  updateAlbumTitle() {
    this.loaded = false;
    // console.log(this.album.title)
    this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe((album: Album) => {
      console.log(this.newTitle)
      album.title = this.newTitle
      console.log(album.title)
      console.log(this.album.id)
      console.log(this.album.title)
      this.album = album;
      // alert(album.title.length)
      this.loaded = true;
      this.newTitle = '';
    });
  }

}

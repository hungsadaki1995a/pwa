import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NewAlbumDialogComponent } from 'src/app/dialog/new-album-dialog/new-album-dialog.component';
import { HOST_URL } from 'src/app/constants/config.constant';
import { AlbumResponseDTO } from 'src/app/model/album.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  albums: AlbumResponseDTO[] = [];

  constructor(private http: HttpClient,
              private dialog: MatDialog) {

  }
  
  ngOnInit() {
    this.http.get(HOST_URL + '/album').subscribe(response => {
      this.albums = response as AlbumResponseDTO[];
    })
  }
  
  createNewAlbum() {
    this.dialog.open(NewAlbumDialogComponent);
  }
  
}

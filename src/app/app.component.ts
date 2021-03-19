import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NewAlbumDialogComponent } from 'src/app/dialog/new-album-dialog/new-album-dialog.component';
import { AlbumResponseDTO } from 'src/app/model/album.dto';
import { environment } from 'src/environments/environment';

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
    this.getAlbumList();
  }
  
  createNewAlbum() {
    this.dialog.open(NewAlbumDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        this.getAlbumList();
      }
    });
  }
  
  private getAlbumList() {
    this.http.get(environment.API_URL + '/album').subscribe(response => {
      this.albums = response as AlbumResponseDTO[];
    })
  }
  
}

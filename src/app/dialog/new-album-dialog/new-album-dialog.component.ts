import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-album-dialog',
  templateUrl: './new-album-dialog.component.html',
  styleUrls: ['./new-album-dialog.component.scss']
})
export class NewAlbumDialogComponent implements OnInit {
  
  albumName: string = '';

  constructor(private http: HttpClient,
              private dialogRef: MatDialogRef<NewAlbumDialogComponent>) { }
  
  ngOnInit(): void {
  }
  
  onClickCreateAlbum() {
    this.http.post('http://localhost:3600/album', {name: this.albumName}).subscribe(response => {
      this.dialogRef.close(true);
    })
  }
  
  onClickCloseDialog() {
    this.dialogRef.close();
  }

}

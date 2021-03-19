import { Component, OnInit } from '@angular/core';
import { AlbumResponseDTO } from 'src/app/model/album.dto';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NewAlbumDialogComponent } from 'src/app/dialog/new-album-dialog/new-album-dialog.component';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/album/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  
  albums: AlbumResponseDTO[] = [];
  
  constructor(private http: HttpClient,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private albumService: AlbumService) {
    
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
  
  onClickNavigateToAlbumDetail(album: AlbumResponseDTO) {
    this.albumService.currentAlbumName = album.name;
    this.router.navigate([album.id], {relativeTo: this.route});
  }
  
  private getAlbumList() {
    this.http.get(environment.API_URL + '/album').subscribe(response => {
      this.albums = response as AlbumResponseDTO[];
    })
  }

}

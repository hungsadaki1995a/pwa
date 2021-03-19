import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlbumResponseDTO } from 'src/app/model/album.dto';
import { AlbumService } from 'src/app/album/album.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  
  images: any[] = [];
  albumName: string = '';
  albumInfo: AlbumResponseDTO;
  fileExtensionsValid = '.png,.jpeg,.jpg';
  private albumId: number = 0;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private albumService: AlbumService) { }

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    this.albumId = Number(albumId);
    this.albumName = this.albumService.currentAlbumName;
    this.getAlbumImageList();
    if (!this.albumName) {
      this.getAlbumInfo();
    }
  }
  
  uploadImageToAlbum(event) {
  
  }
  
  private getAlbumInfo() {
    this.http.get(environment.API_URL + '/album/' + this.albumId).subscribe(result => {
        this.albumInfo = result as AlbumResponseDTO;
        this.albumName = this.albumInfo.name;
    })
  }
  
  private getAlbumImageList() {
    this.http.get(environment.API_URL + '/album/' + this.albumId + '/images').subscribe(result => {
      if (result instanceof Array) {
        this.images = result;
      }
    })
  }

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  responseValue = '';

  constructor(private http: HttpClient) {

  }

  title = 'pwa';

  uploadFile() {
    this.http.get('https://hao-pwa-server.herokuapp.com/').subscribe(response => {
      this.responseValue = 'hien thi len nao';
    })
  }
}

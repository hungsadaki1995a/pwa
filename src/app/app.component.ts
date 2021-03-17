import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  reponseValue = '';

  constructor(private http: HttpClient) {

  }

  title = 'pwa';

  uploadFile() {
    this.http.get('https://hao-pwa-server.herokuapp.com/').subscribe(response => {
      console.log(response);
      this.reponseValue = 'vo roi ban oi';
    })
    
  }
}

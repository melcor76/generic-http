import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private url = 'http://localhost:4200/data'; // URL to web api

  API = 'https://swapi.co/api/people';
  items: Observable<any>;

  constructor(private http: HttpClient) {
    
  }
  
  call() {
    this.items = this.http.get(this.url)
  }

}

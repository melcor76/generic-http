import { HttpService } from './http.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private url = 'http://localhost:4200/assets/data.json';

  items: Observable<any>;

  constructor(private http: HttpService) {}

  call() {
    this.items = this.http.get(this.url);
  }
}

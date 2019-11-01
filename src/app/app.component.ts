import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
​
//@Component specifies the Angular metadata for the component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
​
export class AppComponent {
  title = "Musea Wereldculturen"
}
​
​
// Component Class file

// voeg modules en componenten toe

import { Component } from '@angular/core';

// Metadata van het component waaronder de Element selector
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// Exporteer values van dit component 
export class AppComponent {
  title = 'MuseaWereldCulturen';
  items = [];
}

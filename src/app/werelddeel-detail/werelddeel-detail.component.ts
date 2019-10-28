// voeg modules en componenten toe
import { Component, OnInit, Input } from '@angular/core';
import { Land } from '../land';

// Metadata van het component waaronder de Element selector
@Component({
  selector: 'app-werelddeel-detail',
  templateUrl: './werelddeel-detail.component.html',
  styleUrls: ['./werelddeel-detail.component.css']
})
export class WerelddeelDetailComponent implements OnInit {
  // exporteer de selected input naar landen
  @Input() land: Land;
  constructor() { }

  ngOnInit() {
  }

}

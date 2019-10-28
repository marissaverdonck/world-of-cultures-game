import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { LANDEN } from '../data';

@Component({
  selector: 'app-werelddeel',
  templateUrl: './werelddeel.component.html',
  styleUrls: ['./werelddeel.component.css']
})

export class WerelddeelComponent implements OnInit {
landen = LANDEN;
selectedLand: Land;

  constructor() { }

  ngOnInit() {
  }
  onSelect(land: Land): void {
    this.selectedLand = land;
  }
}

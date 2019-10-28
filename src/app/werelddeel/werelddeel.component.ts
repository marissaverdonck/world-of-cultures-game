// werelddeel component class

// voeg modules en componenten toeimport { Component, OnInit } from '@angular/core';
import { LandService } from '../land.service';
import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { LANDEN } from '../data';

// Metadata van het component waaronder de Element selector
@Component({
  selector: 'app-werelddeel',
  templateUrl: './werelddeel.component.html',
  styleUrls: ['./werelddeel.component.css']
})

// exporteerd properties van dit component 
export class WerelddeelComponent implements OnInit {
  // landen krijgt de data uit LANDEN
selectedLand: Land;
landen: Land[];

  constructor(private landService: LandService) { }

  ngOnInit() {
    this.getLanden();
  }
   // wijst het geklikte land toe aan het geselecteerde component. 
  onSelect(land: Land): void {
    this.selectedLand = land;
  }
  getLanden(): void {
    this.landService.getLanden()
    .subscribe(landen => this.landen = landen);
  }

}

// werelddeel component class

// voeg modules en componenten toeimport { Component, OnInit } from '@angular/core';
import { LandService } from '../land.service';
import { Component, OnInit } from '@angular/core';
import { Land } from '../land';

//@Component specifies the Angular metadata for the component.
@Component({
  selector: 'app-werelddeel',
  templateUrl: './werelddeel.component.html',
  styleUrls: ['./werelddeel.component.css']
})

// exporteerd properties van dit component 
export class WerelddeelComponent implements OnInit {
// landen krijgt de data uit LANDEN
landen: Land[];
selectedLand: Land;

  constructor(private landService: LandService) { }
  // ngOnInit: injected all required dependencies and run a piece of code at different stages of the component
  // Called after the constructor and called  after the first ngOnChanges() 
  ngOnInit() {
    this.getLanden();
  }
// Het gelecteerde land. gebruikt met doorlinken
  onSelect(land: Land): void {
    this.selectedLand = land;
  }

  getLanden(): void {
    this.landService.getLanden()
    .subscribe(landen => this.landen = landen);
  }
}

// werelddeel component class

// voeg modules en componenten toeimport { Component, OnInit } from '@angular/core';
import { LandService } from '../land.service';
import { Component, OnInit } from '@angular/core';
import { Land } from '../land';

// Metadata van het component waaronder de Element selector
@Component({
  selector: 'app-werelddeel',
  templateUrl: './werelddeel.component.html',
  styleUrls: ['./werelddeel.component.css']
})

// exporteerd properties van dit component 
export class WerelddeelComponent implements OnInit {
  // landen krijgt de data uit LANDEN

landen: Land[];

  constructor(private landService: LandService) { }

  ngOnInit() {
    this.getLanden();
  }

  getLanden(): void {
    this.landService.getLanden()
    .subscribe(landen => this.landen = landen);
  }

}

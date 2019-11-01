// voeg modules en componenten toe
import { Component, OnInit, Input } from '@angular/core';
import { Land } from '../land';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LandService }  from '../land.service';

//@Component specifies the Angular metadata for the component.
@Component({
  selector: 'app-werelddeel-detail',
  templateUrl: './werelddeel-detail.component.html',
  styleUrls: ['./werelddeel-detail.component.css']
})

// Export the component class so you can import it elsewhere
export class WerelddeelDetailComponent implements OnInit {
land: Land;

  constructor(
  private route: ActivatedRoute,
  private landService: LandService,
  private location: Location
  ) { }
  // ngOnInit: injected all required dependencies and run a piece of code at different stages of the component
  // Called after the constructor and called  after the first ngOnChanges() 
  ngOnInit(): void {
    this.getLand();
  }
  getLand(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.landService.getLand(id)
      .subscribe(land => this.land = land);
  } 
  goBack(): void {
    this.location.back();
  }
}

// voeg modules en componenten toe
import { Component, OnInit, Input } from '@angular/core';
import { Land } from '../land';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LandService }  from '../land.service';


// Metadata van het component waaronder de Element selector
@Component({
  selector: 'app-werelddeel-detail',
  templateUrl: './werelddeel-detail.component.html',
  styleUrls: ['./werelddeel-detail.component.css']
})
export class WerelddeelDetailComponent implements OnInit {
  land: Land;

  constructor(
  private route: ActivatedRoute,
  private landService: LandService,
  private location: Location
  ) { }

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

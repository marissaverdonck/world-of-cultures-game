import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { LandService } from '../land.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  landen: Land[] = [];

  constructor(private landService: LandService) { }

  ngOnInit() {
    this.getLanden();
  }
// Geeft een lijst landen in de positie 1 tot 5
  getLanden(): void {
    this.landService.getLanden()
      .subscribe(landen => this.landen = landen.slice(1, 5));
  }
}
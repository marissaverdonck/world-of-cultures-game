import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { LandService } from '../land.service';

//@Component specifies the Angular metadata for the component.
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
// Export the component class so you can import it elsewhere
export class DashboardComponent{
  landen: Land[] = [];
  
  constructor(private landService: LandService) { }

}
import { Injectable } from '@angular/core';
import { Land } from './land';
import { LANDEN } from './data';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class LandService {

  constructor(private messageService: MessageService) { }

  getLanden(): Observable<Land[]> {
   // TODO: send the message _after_ fetching the heroes
  this.messageService.add('LandService: fetched landen');
  return of(LANDEN);
  }
  getLand(id: number): Observable<Land> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`LandService: fetched land id=${id}`);
    return of(LANDEN.find(land => land.id === id));
  }
}

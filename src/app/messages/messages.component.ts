import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

//@Component specifies the Angular metadata for the component.
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
// Export the component class so you can import it elsewhere
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
  // ngOnInit: injected all required dependencies and run a piece of code at different stages of the component
  // Called after the constructor and called  after the first ngOnChanges() 
  ngOnInit() {
  }

}

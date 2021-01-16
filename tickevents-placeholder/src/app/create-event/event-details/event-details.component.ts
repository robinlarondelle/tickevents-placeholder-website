import { Component, OnInit } from '@angular/core';
import { EventDetailsState } from 'src/app/shared/models/EventDetailsStateEnum,';
import { CreateEventService } from 'src/app/shared/services/create-event.service';
import { EventDetailsService } from 'src/app/shared/services/event-details.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  state: EventDetailsState
  eventName = EventDetailsState.EVENT_NAME
  eventLocation = EventDetailsState.EVENT_LOCATION
  eventDateTime = EventDetailsState.EVENT_DATETIME

  constructor(
    private createEventService: CreateEventService
  ) {
    this.state = EventDetailsState.EVENT_NAME
   }

  ngOnInit(): void {
    console.log(this.state == this.eventName);
    console.log(this.state);
  }

  clickNext(): void {
    console.log("next");
    
    switch(this.state) {
      case EventDetailsState.EVENT_NAME: {
        this.state = EventDetailsState.EVENT_DATETIME
        break;
      }
      case EventDetailsState.EVENT_DATETIME: {
        this.state = EventDetailsState.EVENT_LOCATION
        break;
      }
      case EventDetailsState.EVENT_LOCATION: {
        this.createEventService.toggleSecondSectionActive()
        break;
      }
    }
  }

  clickPrevious(): void {
    console.log("prev");
    
    switch(this.state) {
      case EventDetailsState.EVENT_NAME: {
        //do nothing
        break;
      }
      case EventDetailsState.EVENT_DATETIME: {
        this.state = EventDetailsState.EVENT_NAME
        break;

      }
      case EventDetailsState.EVENT_LOCATION: {
        this.state = EventDetailsState.EVENT_DATETIME
        break;
      }
    }
  }

}

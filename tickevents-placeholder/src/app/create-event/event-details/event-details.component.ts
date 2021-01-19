import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EventDetailsState } from 'src/app/shared/models/EventDetailsStateEnum,';
import { CreateEventService } from 'src/app/shared/services/create-event.service';
import { EventDetailsService } from 'src/app/shared/services/event-details.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit, OnDestroy {
  state: EventDetailsState
  $state: Subscription
  eventName = EventDetailsState.EVENT_NAME
  eventLocation = EventDetailsState.EVENT_LOCATION
  eventDateTime = EventDetailsState.EVENT_DATETIME

  constructor(
    private eventDetailsService: EventDetailsService
  ) {
   }

  ngOnInit(): void {
    this.$state = this.eventDetailsService.getCurrentState().subscribe(newState => {
      this.state = newState
    })
  }

  ngOnDestroy(): void {
    this.$state.unsubscribe()
  }
}

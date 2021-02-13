import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonalDetailsState, TicketDetailsState } from 'src/app/shared/models/states';
import { CreateEventState } from 'src/app/shared/models/states/CreateEventStateEnum';
import { EventDetailsState } from 'src/app/shared/models/states/EventDetailsStateEnum,';
import { ProgressTrackerService } from 'src/app/shared/services/progress-tracker.service';

@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.css', './../shared/stylesheets/create-event.css']
})
export class ProgressTrackerComponent implements OnInit, OnDestroy {
  mainState: CreateEventState
  $mainState: Subscription
  subState: EventDetailsState | TicketDetailsState | PersonalDetailsState
  $subState: Subscription

  createEvent = CreateEventState.CREATE_EVENT
  eventName = EventDetailsState.EVENT_NAME
  eventDate = EventDetailsState.EVENT_DATETIME
  eventLocation = EventDetailsState.EVENT_LOCATION

  createTickets = CreateEventState.CREATE_TICKETS
  ticketName = TicketDetailsState.TICKET_NAME
  ticketDate = TicketDetailsState.TICKET_DATE
  ticketAmount = TicketDetailsState.TICKET_AMOUNT
  ticketOverview = TicketDetailsState.TICKET_OVERVIEW

  createPersonalDetails = CreateEventState.CREATE_PERSONAL_DETAILS
  personalName = PersonalDetailsState.PERSONAL_DATA
  personalOverview = PersonalDetailsState.PERSONAL_OVERVIEW

  overview = CreateEventState.OVERVIEW

  constructor(
    private progressTrackerService: ProgressTrackerService
  ) {
  }

  ngOnInit(): void {
    this.$mainState = this.progressTrackerService.mainState.subscribe(mainState => {
      this.mainState = mainState
    })

    this.$subState = this.progressTrackerService.subState.subscribe(subState => {
      this.subState = subState
    })
  }

  ngOnDestroy() {
    this.$mainState.unsubscribe()
    this.$subState.unsubscribe()
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CreateEventState, EventDetailsState, TicketDetailsState, PersonalDetailsState } from '../models/states';

// This service could be heavily improved if the State Pattern was applied in the relevant components
@Injectable({
  providedIn: 'root'
})
export class ProgressTrackerService {
  mainState: BehaviorSubject<CreateEventState>
  subState: BehaviorSubject<EventDetailsState | TicketDetailsState | PersonalDetailsState>

  constructor() {
    this.mainState = new BehaviorSubject(CreateEventState.CREATE_EVENT)
    this.subState = new BehaviorSubject(EventDetailsState.EVENT_NAME)
  }

  //The mainState decides what main component should be loaded
  //Each main component has a few child components, the subStates
  private nextMainState() {
    switch (this.mainState.getValue()) {
      case CreateEventState.CREATE_EVENT:
        this.mainState.next(CreateEventState.CREATE_TICKETS)
        this.subState.next(TicketDetailsState.TICKET_NAME)
        break

      case CreateEventState.CREATE_TICKETS:
        this.mainState.next(CreateEventState.CREATE_PERSONAL_DETAILS)
        this.subState.next(PersonalDetailsState.PERSONAL_DETAILS)
        break

      case CreateEventState.CREATE_PERSONAL_DETAILS:
        this.mainState.next(CreateEventState.OVERVIEW)
        break

      case CreateEventState.OVERVIEW:
        // do nothing, no state after the overview state as of yet
        break
    }
  }

  private previousMainState() {
    switch (this.mainState.getValue()) {
      case CreateEventState.CREATE_EVENT:
        // do nothing, no state before this mainState 
        break

      case CreateEventState.CREATE_TICKETS:
        this.mainState.next(CreateEventState.CREATE_EVENT)

        //When going to the previous mainState, the last subState of that mainState should be loaded
        this.subState.next(EventDetailsState.EVENT_LOCATION)
        break

      case CreateEventState.CREATE_PERSONAL_DETAILS:
        this.mainState.next(CreateEventState.CREATE_TICKETS)
        this.subState.next(TicketDetailsState.TICKET_OVERVIEW)
        break

      case CreateEventState.OVERVIEW:
        this.mainState.next(CreateEventState.CREATE_PERSONAL_DETAILS)
        this.subState.next(PersonalDetailsState.PERSONAL_OVERVIEW)
        break
    }
  }

  nextSubState() {
    switch (this.mainState.getValue()) {
      case CreateEventState.CREATE_EVENT:
        switch (this.subState.getValue()) {
          case EventDetailsState.EVENT_NAME:
            this.subState.next(EventDetailsState.EVENT_DATETIME)
            break
          case EventDetailsState.EVENT_DATETIME:
            this.subState.next(EventDetailsState.EVENT_LOCATION)
            break
          case EventDetailsState.EVENT_LOCATION:
            //last state in this substate, moving on to next MainState
            this.nextMainState()
            break
        }
        break
      case CreateEventState.CREATE_TICKETS:
        switch (this.subState.getValue()) {
          case TicketDetailsState.TICKET_NAME:
            this.subState.next(TicketDetailsState.TICKET_AMOUNT)
            break
          case TicketDetailsState.TICKET_AMOUNT:
            this.subState.next(TicketDetailsState.TICKET_DATE)
            break
          case TicketDetailsState.TICKET_DATE:
            this.subState.next(TicketDetailsState.TICKET_OVERVIEW)
            break
          case TicketDetailsState.TICKET_OVERVIEW:
            this.nextMainState()
            break
        }
        break
      case CreateEventState.CREATE_PERSONAL_DETAILS:
        switch (this.subState.getValue()) {
          case PersonalDetailsState.PERSONAL_DETAILS:
            this.subState.next(PersonalDetailsState.PERSONAL_OVERVIEW)
            break
          case PersonalDetailsState.PERSONAL_OVERVIEW:
            this.nextMainState()
            break
        }
        break
      case CreateEventState.OVERVIEW:
        //nothing, there is no mainState or subState after Overview
        break
    }
  }

  previousSubState() {
    switch (this.mainState.getValue()) {
      case CreateEventState.CREATE_EVENT:
        switch (this.subState.getValue()) {
          case EventDetailsState.EVENT_NAME:
            //nothing, no previous subState or mainState
            break
          case EventDetailsState.EVENT_DATETIME:
            this.subState.next(EventDetailsState.EVENT_NAME)
            break
          case EventDetailsState.EVENT_LOCATION:
            this.subState.next(EventDetailsState.EVENT_DATETIME)
            break
        }
        break
      case CreateEventState.CREATE_TICKETS:
        switch (this.subState.getValue()) {
          case TicketDetailsState.TICKET_NAME:
            this.previousMainState()
            break
          case TicketDetailsState.TICKET_AMOUNT:
            this.subState.next(TicketDetailsState.TICKET_NAME)
            break
          case TicketDetailsState.TICKET_DATE:
            this.subState.next(TicketDetailsState.TICKET_AMOUNT)
            break
          case TicketDetailsState.TICKET_OVERVIEW:
            this.subState.next(TicketDetailsState.TICKET_DATE)
            break
        }
        break
      case CreateEventState.CREATE_PERSONAL_DETAILS:
        switch (this.subState.getValue()) {
          case PersonalDetailsState.PERSONAL_DETAILS:
            this.previousMainState()
            break
          case PersonalDetailsState.PERSONAL_OVERVIEW:
            this.subState.next(PersonalDetailsState.PERSONAL_DETAILS)
            break
        }
        break
      case CreateEventState.OVERVIEW:
        this.previousMainState()
        break
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EventDetailsState } from '../models/EventDetailsStateEnum,';
import { CreateEventService } from './create-event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {
  private state: BehaviorSubject<EventDetailsState>

  constructor(
    private createEventService: CreateEventService
  ) {
    this.state = new BehaviorSubject(EventDetailsState.EVENT_NAME)
  }

  nextState(): void {
    switch(this.state.getValue()) {
      case EventDetailsState.EVENT_NAME: {
        this.state.next(EventDetailsState.EVENT_DATETIME)
        break;
      }
      case EventDetailsState.EVENT_DATETIME: {
        this.state.next(EventDetailsState.EVENT_LOCATION)
        break;
      }
      case EventDetailsState.EVENT_LOCATION: {
        this.createEventService.nextState()
        break;
      }
    }
  }

  previousState(): void {
    switch(this.state.getValue()) {
      case EventDetailsState.EVENT_NAME: {
        //do nothing
        break;
      }
      case EventDetailsState.EVENT_DATETIME: {
        this.state.next(EventDetailsState.EVENT_NAME)
        break;

      }
      case EventDetailsState.EVENT_LOCATION: {
        this.state.next(EventDetailsState.EVENT_DATETIME)
        break;
      }
    }
  }

  getCurrentState(): Observable<EventDetailsState> {
    return this.state.asObservable()
  }
}

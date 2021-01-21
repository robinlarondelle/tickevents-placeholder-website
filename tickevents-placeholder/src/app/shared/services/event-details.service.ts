import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventDetailsState } from '../models/states/EventDetailsStateEnum,';
import { CreateEventStateService } from './create-event-state.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {
  private state: BehaviorSubject<EventDetailsState>

  constructor(
    private createEventStateService: CreateEventStateService
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
        this.createEventStateService.nextState()
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CreateEventState } from '../models/CreateEventStateEnum';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {
  private state: BehaviorSubject<CreateEventState>

  constructor(
    private http: HttpClient
  ) {
    this.state = new BehaviorSubject(CreateEventState.CREATE_EVENT)
  }

  nextState() {
    switch(this.state.getValue()) {
      case CreateEventState.CREATE_EVENT:
        this.state.next(CreateEventState.CREATE_TICKETS)
        break
      case CreateEventState.CREATE_TICKETS:
        this.state.next(CreateEventState.CREATE_PERSONAL_DETAILS)
        break
      case CreateEventState.CREATE_PERSONAL_DETAILS:
        this.state.next(CreateEventState.OVERVIEW)
        break
      case CreateEventState.OVERVIEW:
        //nothing, after this the user will resume to the dashboard
        break;
    }
  }

  previousState() {
    switch(this.state.getValue()) {
      case CreateEventState.CREATE_EVENT:
        // Nothing, this is the first state, there is nothing before this
        break
      case CreateEventState.CREATE_TICKETS:
        this.state.next(CreateEventState.CREATE_EVENT)
        break
      case CreateEventState.CREATE_PERSONAL_DETAILS:
        this.state.next(CreateEventState.CREATE_TICKETS)
        break
      case CreateEventState.OVERVIEW:
        this.state.next(CreateEventState.CREATE_PERSONAL_DETAILS)
        break;
    }
  }


  getCurrentState(): Observable<CreateEventState> {
    return this.state.asObservable()
  }
}

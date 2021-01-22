import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateEventState } from '../models/states/CreateEventStateEnum';

@Injectable({
  providedIn: 'root'
})
export class CreateEventStateService {
  private state: BehaviorSubject<CreateEventState>

  constructor(
    private router: Router
  ) {
    this.state = new BehaviorSubject(CreateEventState.CREATE_EVENT)
  }

  nextState(route: ActivatedRoute) {
    switch (this.state.getValue()) {
      case CreateEventState.CREATE_EVENT:
        this.state.next(CreateEventState.CREATE_TICKETS)
        this.router.navigate(["ticket-details"], { relativeTo: route.parent.parent })
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

  previousState(route: ActivatedRoute) {
    switch (this.state.getValue()) {
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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateEventState } from '../shared/models/states/CreateEventStateEnum';
import { CreateEventStateService } from '../shared/services/create-event-state.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css', './shared/stylesheets/create-event.css']
})
export class CreateEventComponent implements OnInit, OnDestroy {
  state: CreateEventState
  private $state: Subscription

  // states to expose them to the template
  createEvent = CreateEventState.CREATE_EVENT
  createTickets = CreateEventState.CREATE_TICKETS
  createPersonalDetails = CreateEventState.CREATE_PERSONAL_DETAILS
  overview = CreateEventState.OVERVIEW


  constructor(
    private createEventStateService: CreateEventStateService
  ) { }

  ngOnInit(): void {
    this.$state = this.createEventStateService.getCurrentState().subscribe(newState => {
      this.state = newState
    })
  }

  ngOnDestroy() {
    this.$state.unsubscribe()
  }
}

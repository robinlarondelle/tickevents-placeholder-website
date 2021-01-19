import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateEventState } from '../shared/models/CreateEventStateEnum';
import { CreateEventService } from '../shared/services/create-event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit, OnDestroy {
  state: CreateEventState
  private $state: Subscription

  createEvent = CreateEventState.CREATE_EVENT
  createTickets = CreateEventState.CREATE_TICKETS
  createPersonalDetails = CreateEventState.CREATE_PERSONAL_DETAILS
  overview = CreateEventState.OVERVIEW


  constructor(
    private createEventService: CreateEventService
  ) { }

  ngOnInit(): void {
    this.$state = this.createEventService.getCurrentState().subscribe(newState => {
      this.state = newState
    })
  }

  ngOnDestroy() {
    this.$state.unsubscribe()
  }
}

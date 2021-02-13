import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEventState } from '../shared/models/states/CreateEventStateEnum';
import { CreateEventFormService } from '../shared/services/create-event-form.service';
import { ProgressTrackerService } from '../shared/services/progress-tracker.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css', './shared/stylesheets/create-event.css']
})
export class CreateEventComponent implements OnInit, OnDestroy {
  private $state: Subscription
  createEventActive: boolean = true
  createTicketActive: boolean = false
  createPersonalDetailsActive: boolean = false
  overviewActive: boolean = false

  constructor(
    private progressTrackerService: ProgressTrackerService
  ) { }

  ngOnInit(): void {
    this.$state = this.progressTrackerService.mainState.subscribe(mainState => {
      switch (mainState) {

        case CreateEventState.CREATE_TICKETS:
          this.createEventActive = true
          this.createTicketActive = true
          this.createPersonalDetailsActive = false
          this.overviewActive = false
          break

        case CreateEventState.CREATE_PERSONAL_DETAILS:
          this.createEventActive = true
          this.createTicketActive = true
          this.createPersonalDetailsActive = true
          this.overviewActive = false
          break

        case CreateEventState.OVERVIEW:
          this.createEventActive = true
          this.createTicketActive = true
          this.createPersonalDetailsActive = true
          this.overviewActive = true
          break

        // default case only happens when the state is CreateEvent, which is the first possible state
        default:
          this.createEventActive = true
          this.createTicketActive = false
          this.createPersonalDetailsActive = false
          this.overviewActive = false
      }
    })
  }

  ngOnDestroy() {
    this.$state.unsubscribe()
  }
}

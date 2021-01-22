import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventDetailsState } from 'src/app/shared/models/states/EventDetailsStateEnum,';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css', '../shared/stylesheets/create-event.css']
})

export class EventDetailsComponent implements OnInit, OnDestroy {
  state: EventDetailsState
  private $state: Subscription

  createEventForm: FormGroup
  private $createEventForm: Subscription

  // states to expose them to the template
  eventName = EventDetailsState.EVENT_NAME
  eventLocation = EventDetailsState.EVENT_LOCATION
  eventDateTime = EventDetailsState.EVENT_DATETIME

  constructor(
    private createEventFormService: CreateEventFormService
  ) {
   }

  ngOnInit(): void {
    this.$createEventForm = this.createEventFormService.getCreateEventForm().subscribe(form => {
      this.createEventForm = form      
    })
  }

  ngOnDestroy(): void {
    this.$state.unsubscribe()
    this.$createEventForm.unsubscribe()
  }
}

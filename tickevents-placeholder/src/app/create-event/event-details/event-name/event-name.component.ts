import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';
import { EventDetailsService } from 'src/app/shared/services/event-details.service';

@Component({
  selector: 'app-event-name',
  templateUrl: './event-name.component.html',
  styleUrls: ['./event-name.component.css', '../../shared/stylesheets/create-event.css']
})
export class EventNameComponent implements OnInit, OnDestroy {
  createEventForm: FormGroup
  private $createEventForm: Subscription

  constructor(
    private eventDetailsService: EventDetailsService,
    private createEventFormService: CreateEventFormService
  ) { }

  ngOnInit(): void {
    this.$createEventForm = this.createEventFormService.getCreateEventForm().subscribe(form => {
      this.createEventForm = form
    })
  }

  clickNext() {
    this.eventDetailsService.nextState()
  }

  ngOnDestroy() {
    this.$createEventForm.unsubscribe()
  }

  get eventName() {return this.createEventForm.get("eventName")}
}

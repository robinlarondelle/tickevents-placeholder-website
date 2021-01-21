import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';
import { EventDetailsService } from 'src/app/shared/services/event-details.service';

@Component({
  selector: 'app-event-datetime',
  templateUrl: './event-datetime.component.html',
  styleUrls: ['./event-datetime.component.css', '../../shared/stylesheets/create-event.css']
})
export class EventDatetimeComponent implements OnInit, OnDestroy {
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

  clickPrevious() {
    this.eventDetailsService.previousState()
  }

  ngOnDestroy() {
    this.$createEventForm.unsubscribe()
  }
}

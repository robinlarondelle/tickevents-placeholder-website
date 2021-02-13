import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css', '../shared/stylesheets/create-event.css']
})

export class EventDetailsComponent implements OnInit, OnDestroy {
  createEventForm: FormGroup
  private $createEventForm: Subscription

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
    this.$createEventForm.unsubscribe()
  }
}

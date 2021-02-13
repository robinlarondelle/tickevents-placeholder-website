import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventDetailsState } from 'src/app/shared/models/states';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';

@Component({
  selector: 'app-event-name',
  templateUrl: './event-name.component.html',
  styleUrls: ['./event-name.component.css', '../../shared/stylesheets/create-event.css']
})
export class EventNameComponent implements OnInit, OnDestroy {
  createEventForm: FormGroup
  private $createEventForm: Subscription

  constructor(
    private createEventFormService: CreateEventFormService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Naam van Evenement")

    this.$createEventForm = this.createEventFormService.getCreateEventForm().subscribe(form => {
      this.createEventForm = form
    })
  }

  clickNext() {
    this.router.navigate([EventDetailsState.EVENT_DATETIME.toString()], { relativeTo: this.route.parent })
  }

  ngOnDestroy() {
    this.$createEventForm.unsubscribe()
  }

  get eventName() { return this.createEventForm.get("eventName") }
}

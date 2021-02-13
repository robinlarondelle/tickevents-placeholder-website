import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDetailsState } from 'src/app/shared/models/states';

@Component({
  selector: 'app-event-datetime',
  templateUrl: './event-datetime.component.html',
  styleUrls: ['./event-datetime.component.css', '../../shared/stylesheets/create-event.css']
})
export class EventDatetimeComponent implements OnInit, OnDestroy {
  createEventForm: FormGroup
  private $createEventForm: Subscription

  constructor(
    private createEventFormService: CreateEventFormService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Datum van evenement")

    this.$createEventForm = this.createEventFormService.getCreateEventForm().subscribe(form => {
      this.createEventForm = form
    })
  }

  clickNext() {
    this.router.navigate([EventDetailsState.EVENT_LOCATION.toString()], { relativeTo: this.route.parent })
  }

  clickPrevious() {
    this.router.navigate([EventDetailsState.EVENT_NAME.toString()], { relativeTo: this.route.parent })
  }

  ngOnDestroy() {
    this.$createEventForm.unsubscribe()
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-location',
  templateUrl: './event-location.component.html',
  styleUrls: ['./event-location.component.css', '../../shared/stylesheets/create-event.css']
})
export class EventLocationComponent implements OnInit, OnDestroy {
  createEventForm: FormGroup
  private $createEventForm: Subscription

  constructor(
    private createEventFormService: CreateEventFormService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Create Event Location")

    this.$createEventForm = this.createEventFormService.getCreateEventForm().subscribe(form => {
      this.createEventForm = form
    })
  }

  clickNext() {
    this.router.navigate(["ticket-details"], {relativeTo: this.route.parent.parent})
  }

  clickPrevious() {
   this.router.navigate(["event-datetime"], {relativeTo: this.route.parent})
  }

  ngOnDestroy() {
    this.$createEventForm.unsubscribe()
  }
}

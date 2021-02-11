import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressTrackerService } from 'src/app/shared/services/progress-tracker.service';

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
    private progressTrackerService: ProgressTrackerService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Create Event Date and Time")

    this.$createEventForm = this.createEventFormService.getCreateEventForm().subscribe(form => {
      this.createEventForm = form
    })
  }

  clickNext() {
    this.progressTrackerService.nextSubState()
    this.router.navigate(["event-location"], {relativeTo: this.route.parent})
  }

  clickPrevious() {
    this.progressTrackerService.previousSubState()
    this.router.navigate(["event-name"], {relativeTo: this.route.parent})
  }

  ngOnDestroy() {
    this.$createEventForm.unsubscribe()
  }
}

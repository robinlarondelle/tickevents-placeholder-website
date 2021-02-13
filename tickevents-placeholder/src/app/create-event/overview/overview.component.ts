import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreateEventState, PersonalDetailsState } from 'src/app/shared/models/states';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  createEventForm: FormGroup
  private $createEventForm: Subscription

  constructor(
    private createEventFormService: CreateEventFormService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.$createEventForm = this.createEventFormService.getCreateEventForm().subscribe(form => {
      this.createEventForm = form
    })

    this.title.setTitle("Tickevents | Evenement overzicht")
  }

  ngOnDestroy(): void {
    this.$createEventForm.unsubscribe()
  }

  clickPrevious() {
    this.router.navigate([CreateEventState.CREATE_PERSONAL_DETAILS.toString() + "/" + PersonalDetailsState.PERSONAL_OVERVIEW.toString()], {relativeTo: this.route.parent})
  }

  //Last subState in this mainState, navigating to next mainState on finish
  clickNext() {
    this.router.navigate([CreateEventState.CREATE_EVENT.toString()], { relativeTo: this.route.parent })
  }
}

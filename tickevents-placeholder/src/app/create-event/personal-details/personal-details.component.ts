import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEventFormService } from 'src/app/shared/services/create-event-form.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

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

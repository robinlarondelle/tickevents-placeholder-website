import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateEventForm } from '../models/CreateEventForm';
import { Event } from '../models/EventModel';

@Injectable({
  providedIn: 'root'
})
export class CreateEventFormService {
  private createEventForm: BehaviorSubject<FormGroup | undefined>

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.createEventForm = new BehaviorSubject(this.fb.group(new CreateEventForm(new Event())))
  }

  submitForm(form: any) {

  }

  getCreateEventForm(): Observable<FormGroup> {
    return this.createEventForm.asObservable()
  }
}

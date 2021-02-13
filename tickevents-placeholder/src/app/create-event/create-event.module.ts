import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEventHeaderComponent } from './create-event-header/create-event-header.component';
import { CreateEventComponent } from './create-event.component';
import { EventDatetimeComponent } from './event-details/event-datetime/event-datetime.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventLocationComponent } from './event-details/event-location/event-location.component';
import { EventNameComponent } from './event-details/event-name/event-name.component';
import { OverviewComponent } from './overview/overview.component';
import { PersonalDataComponent } from './personal-details/personal-data/personal-data.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalOverviewComponent } from './personal-details/personal-overview/personal-overview.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { NextButtonComponent } from './shared/next-button/next-button.component';
import { PrevButtonComponent } from './shared/prev-button/prev-button.component';
import { TicketAmountComponent } from './ticket-details/ticket-amount/ticket-amount.component';
import { TicketDateComponent } from './ticket-details/ticket-date/ticket-date.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketNameComponent } from './ticket-details/ticket-name/ticket-name.component';
import { TicketOverviewComponent } from './ticket-details/ticket-overview/ticket-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateEventComponent,
    CreateEventHeaderComponent,
    EventDetailsComponent,
    TicketDetailsComponent,
    PersonalDetailsComponent,
    EventNameComponent,
    EventLocationComponent,
    EventDatetimeComponent,
    NextButtonComponent,
    PrevButtonComponent,
    OverviewComponent,
    ProgressTrackerComponent,
    TicketNameComponent,
    TicketAmountComponent,
    TicketDateComponent,
    TicketOverviewComponent,
    PersonalOverviewComponent,
    PersonalDataComponent, 
  ],
  imports: [
    CommonModule,
    CreateEventRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
}) 
export class CreateEventModule { }

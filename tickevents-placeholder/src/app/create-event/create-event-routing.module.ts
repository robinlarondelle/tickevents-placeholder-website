import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CreateEventState, EventDetailsState, TicketDetailsState, PersonalDetailsState } from '../shared/models/states';
import { CreateEventComponent } from './create-event.component';
import { EventDatetimeComponent } from './event-details/event-datetime/event-datetime.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventLocationComponent } from './event-details/event-location/event-location.component';
import { EventNameComponent } from './event-details/event-name/event-name.component';
import { OverviewComponent } from './overview/overview.component';
import { PersonalDataComponent } from './personal-details/personal-data/personal-data.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalOverviewComponent } from './personal-details/personal-overview/personal-overview.component';
import { TicketAmountComponent } from './ticket-details/ticket-amount/ticket-amount.component';
import { TicketDateComponent } from './ticket-details/ticket-date/ticket-date.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketNameComponent } from './ticket-details/ticket-name/ticket-name.component';
import { TicketOverviewComponent } from './ticket-details/ticket-overview/ticket-overview.component';


const routes: Routes = [  {
  path: "", component: CreateEventComponent, children: [
    { path: "", redirectTo: CreateEventState.CREATE_EVENT, pathMatch: "full" },
    {
      path: CreateEventState.CREATE_EVENT, component: EventDetailsComponent, children: [
        { path: "", redirectTo: EventDetailsState.EVENT_NAME, pathMatch: "full" },
        { path: EventDetailsState.EVENT_NAME, component: EventNameComponent },
        { path: EventDetailsState.EVENT_DATETIME, component: EventDatetimeComponent },
        { path: EventDetailsState.EVENT_LOCATION, component: EventLocationComponent },
      ]
    },
    {
      path: CreateEventState.CREATE_TICKETS, component: TicketDetailsComponent, children: [
        { path: "", redirectTo: TicketDetailsState.TICKET_NAME, pathMatch: "full" },
        { path: TicketDetailsState.TICKET_NAME, component: TicketNameComponent },
        { path: TicketDetailsState.TICKET_AMOUNT, component: TicketAmountComponent },
        { path: TicketDetailsState.TICKET_DATE, component: TicketDateComponent },
        { path: TicketDetailsState.TICKET_OVERVIEW, component: TicketOverviewComponent }
      ]
    },
    {
      path: CreateEventState.CREATE_PERSONAL_DETAILS, component: PersonalDetailsComponent, children: [
        { path: "", redirectTo: PersonalDetailsState.PERSONAL_DATA, pathMatch: "full" },
        { path: PersonalDetailsState.PERSONAL_DATA, component: PersonalDataComponent },
        { path: PersonalDetailsState.PERSONAL_OVERVIEW, component: PersonalOverviewComponent },
      ]
    },
    {
      path: CreateEventState.OVERVIEW, component: OverviewComponent
    }
  ]
},
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEventRoutingModule { }

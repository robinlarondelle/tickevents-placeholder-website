import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './create-event/event-details/event-details.component';
import { EventNameComponent } from './create-event/event-details/event-name/event-name.component';
import { EventDatetimeComponent } from './create-event/event-details/event-datetime/event-datetime.component';
import { EventLocationComponent } from './create-event/event-details/event-location/event-location.component';
import { TicketDetailsComponent } from './create-event/ticket-details/ticket-details.component';
import { PersonalDetailsComponent } from './create-event/personal-details/personal-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'new-home', redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  // { path: "getting-started", component: GettingStartedComponent }, //turned off for development purposes
  { path: "getting-started", redirectTo: "create-event" },
  { path: "how-it-works", component: HowItWorksComponent },
  { path: "pricing", component: PricingComponent },

  // Create Event flow
  { path: "create-event", redirectTo: "create-event/event-details/event-name", pathMatch: "full" },
  {
    path: "create-event", component: CreateEventComponent, children: [
      { path: "", redirectTo: "event-details", pathMatch: "full" },
      {
        path: "event-details", component: EventDetailsComponent, children: [
          { path: "", redirectTo: "event-name", pathMatch: "full" },
          { path: "event-name", component: EventNameComponent },
          { path: "event-location", component: EventLocationComponent },
          { path: "event-datetime", component: EventDatetimeComponent }
        ]
      },
      {
        path: "ticket-details", component: TicketDetailsComponent, children: [

        ]
      },
      {
        path: "personal-details", component: PersonalDetailsComponent, children: [

        ]
      }
    ]
  },
  // End Create Event flow

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

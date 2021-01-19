import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { HeaderComponent } from './shared/components/header/header.component';
import { ChevronComponent } from './shared/components/chevron/chevron.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { PricingComponent } from './pricing/pricing.component'; 
import { HighchartsChartModule } from 'highcharts-angular';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NewHomeHeaderComponent } from './home/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';  
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateEventHeaderComponent } from './create-event/create-event-header/create-event-header.component';
import { EventDetailsComponent } from './create-event/event-details/event-details.component';
import { TicketDetailsComponent } from './create-event/ticket-details/ticket-details.component';
import { PersonalDetailsComponent } from './create-event/personal-details/personal-details.component';
import { EventNameComponent } from './create-event/event-details/event-name/event-name.component';
import { EventLocationComponent } from './create-event/event-details/event-location/event-location.component';
import { EventDatetimeComponent } from './create-event/event-details/event-datetime/event-datetime.component';
import { NextButtonComponent } from './create-event/shared/next-button/next-button.component';
import { PrevButtonComponent } from './create-event/shared/prev-button/prev-button.component';
import { OverviewComponent } from './create-event/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChevronComponent, 
    FooterComponent,
    GettingStartedComponent,
    PricingComponent,
    HowItWorksComponent,
    HomeComponent,
    NewHomeHeaderComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgsRevealModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateEventModule } from './create-event/create-event.module';

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
    PageNotFoundComponent,
  ],
  imports: [
    // CreateEventModule,
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgsRevealModule,
    HighchartsChartModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

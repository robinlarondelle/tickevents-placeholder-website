import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { ChevronComponent } from './shared/chevron/chevron.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { PricingComponent } from './pricing/pricing.component'; 
import { HighchartsChartModule } from 'highcharts-angular';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { NewHomeHeaderComponent } from './new-home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ChevronComponent,
    FooterComponent,
    GettingStartedComponent,
    PricingComponent,
    HowItWorksComponent,
    NewHomeComponent,
    NewHomeHeaderComponent,
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

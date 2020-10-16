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
import { ChevronComponent } from './home/chevron/chevron.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { SuccessstoriesComponent } from './successstories/successstories.component';
import { PricingComponent } from './pricing/pricing.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ChevronComponent,
    FooterComponent,
    GettingStartedComponent,
    SuccessstoriesComponent,
    PricingComponent,
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

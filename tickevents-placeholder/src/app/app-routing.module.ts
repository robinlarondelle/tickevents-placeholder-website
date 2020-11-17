import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'new-home', redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "getting-started", component: GettingStartedComponent },
  { path: "how-it-works", component: HowItWorksComponent },
  { path: "pricing", component: PricingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

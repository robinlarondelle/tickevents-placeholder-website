import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { PricingComponent } from './pricing/pricing.component';


const routes: Routes = [
  { path: '', redirectTo: "new-home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "new-home", component: NewHomeComponent },
  { path: "getting-started", component: GettingStartedComponent },
  { path: "how-it-works", component: HowItWorksComponent },
  { path: "pricing", component: PricingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { PricingComponent } from "./pricing/pricing.component";


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'new-home', redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  // { path: "getting-started", component: GettingStartedComponent }, //turned off for development purposes
  { path: "getting-started", redirectTo: "create-event" },
  { path: "how-it-works", component: HowItWorksComponent },
  { path: "pricing", component: PricingComponent },
  { path: "create-event", loadChildren: () => import("./create-event/create-event.module").then(m => m.CreateEventModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

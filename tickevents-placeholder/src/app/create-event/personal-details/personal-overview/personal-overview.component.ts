import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketDetailsState, CreateEventState, PersonalDetailsState } from 'src/app/shared/models/states';

@Component({
  selector: 'app-personal-overview',
  templateUrl: './personal-overview.component.html',
  styleUrls: ['./personal-overview.component.css', '../../shared/stylesheets/create-event.css']
})
export class PersonalOverviewComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Overzicht persoonsgegevens")
  }

  clickPrevious() {
    this.router.navigate([PersonalDetailsState.PERSONAL_DATA.toString()], {relativeTo: this.route.parent})
  }

  //Last subState in this mainState, navigating to next mainState on finish
  clickNext() {
    this.router.navigate([CreateEventState.OVERVIEW.toString()], { relativeTo: this.route.parent.parent })
  }
}

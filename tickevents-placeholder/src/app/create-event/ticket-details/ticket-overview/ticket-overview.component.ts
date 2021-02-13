import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEventState, PersonalDetailsState, TicketDetailsState } from 'src/app/shared/models/states';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Ticket overzicht")
  }

  clickPrevious() {
    this.router.navigate([TicketDetailsState.TICKET_DATE.toString()], {relativeTo: this.route.parent})
  }

  //Last subState in this mainState, navigating to next mainState on finish
  clickNext() {
    this.router.navigate([CreateEventState.CREATE_PERSONAL_DETAILS.toString() + "/" + PersonalDetailsState.PERSONAL_DATA.toString()], { relativeTo: this.route.parent.parent })
  }

}

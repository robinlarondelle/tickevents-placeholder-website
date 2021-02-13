import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketDetailsState, CreateEventState, EventDetailsState } from 'src/app/shared/models/states';

@Component({
  selector: 'app-ticket-name',
  templateUrl: './ticket-name.component.html',
  styleUrls: ['./ticket-name.component.css']
})
export class TicketNameComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Naam van ticket")
  }

  //When returning from the Ticket Name screen the user should return to the last subState from the previous mainState
  clickPrevious() {
    this.router.navigate([CreateEventState.CREATE_EVENT.toString() + "/" + EventDetailsState.EVENT_LOCATION.toString()], { relativeTo: this.route.parent.parent })
  }

  clickNext() {
    this.router.navigate([TicketDetailsState.TICKET_AMOUNT.toString()], { relativeTo: this.route.parent })
  }
}

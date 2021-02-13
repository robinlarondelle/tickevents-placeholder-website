import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketDetailsState, CreateEventState } from 'src/app/shared/models/states';

@Component({
  selector: 'app-ticket-amount',
  templateUrl: './ticket-amount.component.html',
  styleUrls: ['./ticket-amount.component.css']
})
export class TicketAmountComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Hoeveelheid tickets")
  }

  clickPrevious() {
    this.router.navigate([TicketDetailsState.TICKET_NAME.toString()], {relativeTo: this.route.parent})
  }

  clickNext() {
    this.router.navigate([TicketDetailsState.TICKET_DATE.toString()], { relativeTo: this.route.parent })
  }
}

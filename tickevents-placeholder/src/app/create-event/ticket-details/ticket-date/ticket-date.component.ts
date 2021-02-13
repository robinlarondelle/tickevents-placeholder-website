import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketDetailsState, CreateEventState } from 'src/app/shared/models/states';

@Component({
  selector: 'app-ticket-date',
  templateUrl: './ticket-date.component.html',
  styleUrls: ['./ticket-date.component.css']
})
export class TicketDateComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Datum van ticket")
  }

  clickPrevious() {
    this.router.navigate([TicketDetailsState.TICKET_AMOUNT.toString()], {relativeTo: this.route.parent})
  }

  clickNext() {
    this.router.navigate([TicketDetailsState.TICKET_OVERVIEW.toString()], { relativeTo: this.route.parent })
  }
}

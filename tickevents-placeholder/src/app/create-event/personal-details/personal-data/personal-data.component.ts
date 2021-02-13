import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateEventState, EventDetailsState, PersonalDetailsState, TicketDetailsState } from 'src/app/shared/models/states';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Tickevents | Persoonsgegevens")
  }

  //When returning from the Ticket Name screen the user should return to the last subState from the previous mainState
  clickPrevious() {
    this.router.navigate([CreateEventState.CREATE_TICKETS.toString() + "/" + TicketDetailsState.TICKET_OVERVIEW.toString()], { relativeTo: this.route.parent.parent })
  }

  clickNext() {
    this.router.navigate([PersonalDetailsState.PERSONAL_OVERVIEW.toString()], { relativeTo: this.route.parent })
  }
}

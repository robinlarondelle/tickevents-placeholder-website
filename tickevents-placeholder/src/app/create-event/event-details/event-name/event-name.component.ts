import { Component, OnInit } from '@angular/core';
import { EventDetailsService } from 'src/app/shared/services/event-details.service';

@Component({
  selector: 'app-event-name',
  templateUrl: './event-name.component.html',
  styleUrls: ['./event-name.component.css']
})
export class EventNameComponent implements OnInit {

  constructor(
    private eventDetailsService: EventDetailsService
  ) { }

  ngOnInit(): void {
  }

  clickNext() {
    this.eventDetailsService.nextState()
  }

  // There is no previous State since this is the starting state

}

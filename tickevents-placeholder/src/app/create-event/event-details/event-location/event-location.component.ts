import { Component, OnInit } from '@angular/core';
import { EventDetailsService } from 'src/app/shared/services/event-details.service';

@Component({
  selector: 'app-event-location',
  templateUrl: './event-location.component.html',
  styleUrls: ['./event-location.component.css']
})
export class EventLocationComponent implements OnInit {

  constructor(
    private eventDetailsService: EventDetailsService
  ) { }

  ngOnInit(): void {
  }

  clickNext() {
    this.eventDetailsService.nextState()
  }

  clickPrevious() {
    this.eventDetailsService.previousState()
  }

}

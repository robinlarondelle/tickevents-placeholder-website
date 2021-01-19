import { Component, OnInit } from '@angular/core';
import { EventDetailsService } from 'src/app/shared/services/event-details.service';

@Component({
  selector: 'app-event-datetime',
  templateUrl: './event-datetime.component.html',
  styleUrls: ['./event-datetime.component.css']
})
export class EventDatetimeComponent implements OnInit {

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

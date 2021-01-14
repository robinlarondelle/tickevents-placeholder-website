import { Component, OnInit } from '@angular/core';
import { CreateEventService } from '../shared/services/create-event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  _firstEventActive: boolean
  _secondEventActive: boolean
  _thirdEventActive: boolean

  constructor(
    private creaetEventService: CreateEventService
  ) { }

  ngOnInit(): void {
    this._firstEventActive = this.creaetEventService.firstSectionActive
    this._secondEventActive = this.creaetEventService.secondSectionActive
    this._thirdEventActive = this.creaetEventService.thirdSectionActive
  }

}

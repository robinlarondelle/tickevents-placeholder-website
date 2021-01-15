import { Component, OnInit } from '@angular/core';
import { CreateEventService } from '../shared/services/create-event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  _secondEventActive: boolean
  _thirdEventActive: boolean

  constructor(
    private createEventService: CreateEventService
  ) { }

  ngOnInit(): void {

    this.createEventService.secondSectionActive.subscribe(value => {
      this._secondEventActive = value
    })

    this.createEventService.thirdSectionActive.subscribe(value => {
      console.log(value);
      
      this._thirdEventActive = value
    })
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {
  private _currentState: BehaviorSubject<string>

  constructor() { 
    this._currentState = new BehaviorSubject("event-name")
  }

  public get currentState() {
    return this._currentState.asObservable()
  }
}

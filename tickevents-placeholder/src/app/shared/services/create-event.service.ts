import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {
  private _firstSectionActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _secondSectionActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _thirdSectionActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient
  ) {
  }

  get firstSectionActive() { return this._firstSectionActive.value}
  get secondSectionActive() { return this._secondSectionActive.value}
  get thirdSectionActive() { return this._thirdSectionActive.value}

}

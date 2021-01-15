import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {
  private _secondSectionActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _thirdSectionActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient
  ) {
  }

  public toggleSecondSectionActive = () => {
    this._secondSectionActive.next(!this._secondSectionActive.value)
  }

  public toggleThirdSectionActive = () => {
    this._thirdSectionActive.next(!this._thirdSectionActive.value)
  }

  public get secondSectionActive() { return this._secondSectionActive.asObservable()}
  public get thirdSectionActive() { return this._thirdSectionActive.asObservable()}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { DetailsModel } from '../models/detailsModel';
import { ServerResponse } from '../models/serverResponseEnum';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  sendDetails = (details: DetailsModel): Observable<ServerResponse> => {
    const subject = new Subject<ServerResponse>()

    this.sendDetailsToServer(details)
      .subscribe(() => subject.next(ServerResponse.SUCCESS),
        error => {
          switch (error.error.type) {
            case ServerResponse.EMAIL_MISSING_IN_BODY: subject.next(ServerResponse.EMAIL_MISSING_IN_BODY)
            case ServerResponse.INVALID_BODY: subject.next(ServerResponse.INVALID_BODY)
            case ServerResponse.MAILCHIMP_ERROR: {

              switch (error.error.message) {
                case "Member Exists": subject.next(ServerResponse.DUPLICATE_EMAIL)
                case "Invalid Resource": subject.next(ServerResponse.INVALID_RESOURCE)
              }
            }
          }
        })

    return subject
  }

  private sendDetailsToServer = (data: DetailsModel): Observable<any> => {
    return this.http.post<any>("https://tickevents-placeholder-server.herokuapp.com/sendDetails", data)
  }
}

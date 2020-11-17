import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SendEmailStatuses } from '../models/sendEmailStatusesEnum';

@Injectable({
  providedIn: 'root'
})
export class EmailService {  

  constructor(
    private http: HttpClient
  ) { }

  sendEmail = (email: String): Observable<SendEmailStatuses> => {
    console.log('received form data, sending data to server');
    
    this.sendDetailsToServer(email).subscribe(response => {   
      console.log('received success data. Returning observable');
               
      return of(SendEmailStatuses.SUCCESS)
    }, error => {
      if (error.error.type == "MailchimpError") {
        switch (error.error.message) {
          case "Member Exists": {
            console.log('Duplicate Email found. Returning duplicate email error');
            
            return of(SendEmailStatuses.DUPLICATE_EMAIL)}
          case "Invalid Resource": return of(SendEmailStatuses.SERVER_ERROR)
        }
      }
    })

    return of(SendEmailStatuses.SERVER_ERROR)
  }

  private sendDetailsToServer = (data: object): Observable<any> => {
    return this.http.post<any>("https://tickevents-placeholder-server.herokuapp.com/sendDetails", data)
  }
}

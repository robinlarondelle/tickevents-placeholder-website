import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {  

  constructor(
    private http: HttpClient
  ) { }

  sendDetails = (data: object): Observable<any> => {
    console.log(data);
    
    return this.http.post<any>("https://tickevents-placeholder-server.herokuapp.com/sendDetails", data)
  }
}

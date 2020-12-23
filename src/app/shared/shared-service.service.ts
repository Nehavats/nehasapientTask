import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  URL : any = 'https://api.spaceXdata.com/v3/'

  constructor(private http: HttpClient) { }


  get(url): Observable<any> {
    console.log('Request is sent!');
    return this.http.get(this.URL + url);
  }


  post(url, data): Observable<any> {
    console.log('Request is sent!');
    return this.http.post(this.URL+url, data)
  }
}

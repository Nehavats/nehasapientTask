import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedServiceService } from './shared/shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {



  constructor(private http: SharedServiceService) { }
  

  getData(){
   return this.http.get('launches?limit=100') 
  }


  getFilterData(launch_success, land_success, year) {
    return this.http.get('launches?limit=100&launch_success='+ launch_success + '&land_success='+ land_success + '&launch_year=' + year ) 

  }


 

}

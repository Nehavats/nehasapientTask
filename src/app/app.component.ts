import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  yearArray = [];
  landingData =[];
  year: any = null;
  launch: any = null;
  landing: any = null;

  constructor(public _service : HttpServiceService){}

  ngOnInit() { 
    this.getLandingData();
    this.getYearList(2006)


   }


   getYearList(startYear) {
    
      var currentYear = new Date().getFullYear(), 
      startYear = startYear || 1980;  
      while ( startYear <= currentYear ) {
          this.yearArray.push(startYear++);
      }   
     
      console.log(this.yearArray)
   
 
   }

   getLandingData(){
     this._service.getData().subscribe( res => {
       console.log(res)
       this.landingData = res;
     }), err=> {
       console.log(err);
     }
   }

   selectFilter(selection : number, data : any){
     console.log(selection);
     console.log(data);
     if(selection == 1){
       this.year = data
     } else if( selection == 2){
       this.launch = data
     } else {
       this.landing = data
     }
     this.getFilterData();

   }


   getFilterData(){
    this._service.getFilterData(this.launch, this.landing, this.year).subscribe( res => {
      console.log(res)
      this.landingData = res;
    }), err=> {
      console.log(err);
    }

   }







}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {
  Id?:any;
  message?:String;
  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  constructor(public router : Router, public activatedRoute:ActivatedRoute, public customerService:CustomerService) { }
  display = false;
  display1 = false;
  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.userName = this.activatedRoute.snapshot.params['userName'];
  }
  paymentDone(){
    this.display = true
  }

  cancel(){
    if(this.Id = "-1"){
      
      this.customerService.cancelBooking(this.Id).subscribe(
        data=>{
          console.log("delete successfully!!!", data);
          this.router.navigate(["customerDashboard", this.userName]);
        },
        error=>console.log("error got")
      )
    }
    else{
      this.customerService.cancelBooking(this.Id).subscribe(
        data=>{
          console.log("delete successfully!!!", data);
         
        },
        error=>console.log("error got")
      )

      this.customerService.cancelPickAndDrop(this.Id).subscribe(
        data=>{
          console.log("delete successfully!!!", data);
        },
        error=>console.log("error got")
        )
        this.router.navigate(["customerDashboard", this.userName]);
    }
    
  }
  final(){
    this.display1 = true;
    this.message = "your data will save and your Booking Id is:- "+this.Id;

  }
  home(){
    this.router.navigate(["customerDashboard", this.userName]);
  }
}

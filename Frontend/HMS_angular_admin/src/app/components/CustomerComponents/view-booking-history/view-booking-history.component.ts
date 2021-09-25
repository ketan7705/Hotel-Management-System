import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/app/models/bookings';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-booking-history',
  templateUrl: './view-booking-history.component.html',
  styleUrls: ['./view-booking-history.component.css']
})
export class ViewBookingHistoryComponent implements OnInit {
  errorMessage?: string;
  successMessage?: string;

  bookings: Bookings[];
  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.userName = this.activatedRoute.snapshot.params['userName'];
  constructor( public customerService:CustomerService,public router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    ///as
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.getBookingHistory();
  }

  getBookingHistory(){
    this.customerService.viewBookingHistory(this.userName).subscribe((data: any[]) => {
      console.log("###Booking recieved from spring :")
      console.log(data);
      this.bookings = data;
    }, err => this.errorMessage = err)
  }
  Back(){
    this.router.navigate(["customerDashboard", this.userName]);

  }
}

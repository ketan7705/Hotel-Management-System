import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings } from 'src/app/models/bookings';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(public router:Router,public receptionService:ReceptionService,public datePipe:DatePipe) { }

  userName?:string;
  successMessage?:string;
  errorMessage?:string;
  bookingsList: Bookings[] = []
checkInDate?:string;
  ngOnInit(): void {
    this.getBookings();
  }

  getBookings():void{
    console.log("Bookings called")
    this.receptionService.getBookings().subscribe((data)=>{
      this.bookingsList = data
    },error => {
      this.errorMessage = "Some error occured Please try again later"
    })
  }

  //new DatePipe('en-US').transform(myDate, 'yyyy-dd-MM');

  cancelBooking(userName:string,customerCheckIn:Date){
    this.checkInDate = new DatePipe('en-US').transform(customerCheckIn,'yyyy-MM-dd');
    console.log(this.checkInDate)
   this.receptionService.cancelBooking(userName,this.checkInDate).subscribe(() => {
     this.successMessage = "Booking cancelled successfully";
    this.getBookings();
    this.router.navigate(['bookingsPage'])
   },error=>this.errorMessage = "Some error occured,Please try again later")

  }

  bookingNavigate(){
    this.router.navigate(['bookingsPage'])
  }

  logout(){
    this.router.navigate(['receptionistlogin'])
  }

}

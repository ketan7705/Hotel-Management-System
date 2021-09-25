import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings } from 'src/app/models/bookings';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  constructor(public receptionService:ReceptionService,public router:Router) { }

  userName?:string;
  successMessage?:string;
  errorMessage?:string;
  bookingsList: Bookings[] = []
checkInDate?:string;

  ngOnInit(): void {
    this.getCancelBookings();
  }

  cancelBooking(userName:string,customerCheckIn:string){
    let firstDate=new Date(customerCheckIn);
    this.checkInDate = new DatePipe('en-US').transform(firstDate,'yyyy-MM-dd');
    console.log(this.checkInDate)
   this.receptionService.cancelBooking(userName,this.checkInDate).subscribe(() => {
     this.successMessage = "Booking cancelled successfully";
    this.getCancelBookings();
    this.router.navigate(['cancellationPage'])
   },error=>this.errorMessage = "Some error occured,Please try again later")

  }

  getCancelBookings(){
    console.log("Bookings called")
    this.receptionService.getCancelBookings().subscribe((data)=>{
      this.bookingsList = data
    },error => {
      this.errorMessage = "No cancellation Requests "    })
  }

  logout(){
    this.router.navigate(['receptionistlogin'])
  }

  

}

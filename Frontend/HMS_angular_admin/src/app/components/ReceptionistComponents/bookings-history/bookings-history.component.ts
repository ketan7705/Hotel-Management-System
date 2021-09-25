import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings } from 'src/app/models/bookings';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-bookings-history',
  templateUrl: './bookings-history.component.html',
  styleUrls: ['./bookings-history.component.css']
})
export class BookingsHistoryComponent implements OnInit {

  bookingsList:Bookings[] = [];
  errorMessage?:string;
  successMessage?:string;
  constructor(public router:Router,public receptionService:ReceptionService) { }

  ngOnInit(): void {
    this.getBookingsHistory();
  }

  getBookingsHistory():void{
    console.log("Bookings History called")
    this.receptionService.getBookingsHistory().subscribe((data)=>{
      this.bookingsList = data
    },error => {
      this.errorMessage = "Some error occured Please try again later"
    })
  }

  deleteHistory(bookingId:number):void{
    console.log("Delete historu is called")
  }

  bookingNavigate(){
    this.router.navigate(['bookingsPage'])
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingHistory } from 'src/app/models/booking-history';
import { BookingHistoryService } from 'src/app/services/booking-history.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  bookingId!:number;
  bookingHistory!:BookingHistory;
  constructor(public bookingHistoryService:BookingHistoryService,public router:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.bookingId = this.activatedRoute.snapshot.params['bookingId'];
      this.bookingHistoryService.getBookingById(this.bookingId).subscribe((data)=>{
        console.log(data);
        this.bookingHistory=data;
      })
  }

  home(){
    this.router.navigate(['bookingDetails'])
  }

}

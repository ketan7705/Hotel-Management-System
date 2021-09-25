import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bookings } from 'src/app/models/bookings';
import { Room } from 'src/app/models/room';
import { ReceptionService } from 'src/app/services/reception.service';


@Component({
  selector: 'app-un-booked-list',
  templateUrl: './un-booked-list.component.html',
  styleUrls: ['./un-booked-list.component.css']
})
export class UnBookedListComponent implements OnInit {
  bookedList : Bookings[] = [];
  roomNumber ?:number;
  roomStatus?:boolean;
  errorMessage?:string;
  userName?:string;
  rooms:Room[] = [];
  item?:any;
  booking?:Bookings;
  constructor(public activedRoute:ActivatedRoute,public formBuilder:FormBuilder,public receptionService:ReceptionService,public router:Router) { }

  ngOnInit(): void {
    this.refreshPage();
  }

  bookRoomPage(customerUserName?:string)
  {
    //console.log(customerUserName)
    this.userName = customerUserName;
    this.receptionService.getRecordByUserName(this.userName)
    .subscribe(data=>{
      console.log(data),
      this.booking=data
      this.booking.roomNumber=this.roomNumber;
      console.log("from bookRoomPage "+this.booking.roomNumber)
      this.updated(this.userName,this.roomNumber)
     /*  this.viewAllBookingService.sendEmail(this.userName)
      console.log("updating mail room") */
      },error => this.errorMessage = "This room is already alloted")


      //this.viewAllBookingService.

  }

  refreshPage()
  {
    this.roomNumber = 0;
    this.receptionService.getBookingRooms(this.roomNumber)
    .subscribe(data=>{
      console.log(data),
      this.bookedList=data
    })
    this.roomStatus=false;
    this.receptionService.getAllRoomsByStatus(this.roomStatus)
    .subscribe(data=>{
      console.log(data),
      this.rooms=data
    })
  }

  updated(userName?:string,roomNumber?:number)
  {

    this.receptionService.updateBookingRecord(roomNumber,userName).subscribe(data=>{
      console.log("updating room")
      this.roomStatus=true;
      this.receptionService.updateRoomByStatus(this.roomStatus,this.roomNumber)
      .subscribe(updateRoomdata=>{
        this.refreshPage()
        this.receptionService.sendEmail(this.userName)
        .subscribe(data1=>{

        })
      })

       console.log("updating mail room")
    })

  }

  selecteditem(item:any)
  {
    this.roomNumber=this.item;
    console.log(this.roomNumber)

  }

  logout(){
    this.router.navigate(['receptionistlogin'])
  }
}

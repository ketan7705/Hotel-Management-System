import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { BookingHistory } from 'src/app/models/booking-history';
import { BookingHistoryService } from 'src/app/services/booking-history.service';

interface Search {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  imageURL = 'assets/table.png';

  selectedSort:String="any";
  roomType:String="any";
  dataFound:boolean = true;
  errorMessage?:string;
  bookingHistory:BookingHistory[] = [];
  searchBy:String = "default";
  searchByBookingId!:FormGroup;
  searchByBookingName!:FormGroup;
  searchByRoomType!:FormGroup;
  SearchByRoomNumber!:FormGroup;
  customerUserName?:String;
  bookingId?:number;
  roomNumber?:number;
  txtValue:any=null;
  constructor(public bookingHistoryService:BookingHistoryService,public formBuilder:FormBuilder,public router:Router) { }

  ngOnInit(): void {
      this.refreshBookingDetails()

      
    this.searchByBookingId = this.formBuilder.group({
      bookingId: ['', Validators.required]
    })
    this.searchByBookingName = this.formBuilder.group({
      customerUserName: ['', Validators.required]
    })
    /* this.searchByRoomType = this.formBuilder.group({
      roomType: ['', Validators.required]
    }) */
    this.SearchByRoomNumber = this.formBuilder.group({
      roomNumber: ['', Validators.required]
    })
  }

  getBookingDetailsById(){
    console.log(this.searchByBookingId.value)
    console.log(this.txtValue)
    if(this.txtValue == null){
      this.refreshBookingDetails()
    }
    else{
    this.bookingHistoryService.getBookingById(this.searchByBookingId.get('bookingId')?.value).subscribe((data)=>{
      console.log(data);
      this.bookingHistory=[];
      this.bookingHistory[0]=data;
      if(this.bookingHistory[0].bookingId == 0){
        this.errorMessage = "No records found"
        this.bookingHistory=[];
      }
      else{
        this.errorMessage = ""
      }
    }, error => {this.errorMessage = "No records found"}
    )
  }
  }

  getBookingDetailsByName(){
    console.log(this.searchByBookingName.get('customerUserName')?.value)
    console.log(this.txtValue)
    if(this.txtValue == ""){
      this.refreshBookingDetails()
    }
    
    else{
      this.bookingHistoryService.getBookingByCustomerName(this.searchByBookingName.get('customerUserName')?.value).subscribe((data:any[])=>{
        console.log(data);
        this.bookingHistory=data;
        if(this.bookingHistory == null){
          this.errorMessage = "No records found"
      }
      else{
        this.errorMessage = ""
      }
      }, error => {this.errorMessage = "No records found"}
      )
  }
  }

  getBookingDetailsByRoomType(event : any){
    if(this.roomType == "any"){
      this.refreshBookingDetails()
    }
    else{
      this.bookingHistoryService.getBookingByRoomType(this.roomType).subscribe((data:any[])=>{
        console.log(data);
        this.bookingHistory=data;
        if(this.bookingHistory.length==0){
          this.errorMessage = "No records found"
        }
        else{
        this.errorMessage = ""
        }
        }, error => {this.errorMessage = "No records found"}
      )
    }
  }

  getBookingDetailsByRoomNumber(){
    if(this.txtValue == null){
      this.refreshBookingDetails()
    }
    else{
      this.bookingHistoryService.getBookingByRoomNumber(this.SearchByRoomNumber.get('roomNumber')?.value).subscribe((data:any[])=>{
        
        this.bookingHistory=data;
        console.log(this.bookingHistory);
        if(this.bookingHistory.length == 0){
          this.errorMessage = "No records found"
        }
        else{
          this.errorMessage = ""
        }
        }, error => {this.errorMessage = "No records found"}
        )
  }
  }

  sortingDetails(event : any){
    console.log(this.selectedSort)
    if(this.selectedSort == "any"){
      this.refreshBookingDetails()
    }
    else{
      this.bookingHistoryService.sortingBookingDetails(this.selectedSort).subscribe((data:any[])=>{
        console.log(data);
        this.bookingHistory=data;
        if(this.bookingHistory == null){
          this.errorMessage = "No records found"
        }
        else{
        this.errorMessage = ""
        }
      }, error => {this.errorMessage = "No records found"}
)
  }
}

  refreshBookingDetails(){
    this.bookingHistoryService.getBookingHistory().subscribe((data:any[])=>{
      console.log(data)
      this.bookingHistory = data
      if(this.bookingHistory == null){
        this.errorMessage = "No records found"
    }
    else{
      this.errorMessage = ""
    }
    }, error => {this.errorMessage = "No records found"})

  }

  viewDetails(bookingId?:number){
    this.router.navigate(['viewDetails',bookingId])
  }



  sort : Search[] = [
    {value: 'any', viewValue:'Sort By'},
    {value: 'id', viewValue:'Booking Id'},
    {value: 'name', viewValue:'Customer Name'},
    {value: 'roomNumber', viewValue:'Room Number'},
    {value: 'checkInDate', viewValue:'Check In Date'},
    {value: 'checkOutDate', viewValue:'Check Out Date'}
  ]

  room : Search[] = [
    {value: 'any', viewValue:'SearchBy RoomType'},
    {value: 'AC', viewValue:'AC'},
    {value: 'Normal', viewValue:'Normal'},
    {value: 'Deluxe', viewValue:'Delux'}

  ]
}

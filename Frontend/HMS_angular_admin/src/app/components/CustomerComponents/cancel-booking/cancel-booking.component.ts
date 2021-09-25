import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
  cancelBooking: FormGroup;
  errorMessage?:String;
  bookingId? : number;
  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];

  constructor(public formBuilder:FormBuilder, public router:Router,public customerService:CustomerService, public activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.cancelBooking = this.formBuilder.group({
      bookingId : ['', Validators.required],
      customerUserName : ['', Validators.required],
      reason : ['', Validators.required]
    })

  }
  sendCancelBooking(data: any){
    console.log(this.cancelBooking?.value);
    console.log(data.bookingId);
  
    this.customerService.cancelBooking(data.bookingId)
      .subscribe(
        response => {
          console.log(response);
          // this.successMessage = doctorId +" :   successfully deleted";
          console.log("#######Deleted successfully ");
        },
        error => {
          console.log(error);
        });
  }

  Back(){
    this.router.navigate(["customerDashboard", this.userName]);
  }



}

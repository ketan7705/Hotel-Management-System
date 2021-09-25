import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/app/models/bookings';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  
  errMessage : string = "";
  message?:String;
  bookongEditForm !: FormGroup;
  adminId?:number;
  
  

  details = false;
  lable = "Edit";
  readonly = true;
  Id?:number;
  SuccessMsg?:String;
  userName?:String;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];
  booking?:Bookings;

  constructor(public customerServices: CustomerService ,public activatedRoute: ActivatedRoute,public formBuilder:FormBuilder,public router:Router) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.getProfile();
    document.getElementById("display1").style.display = "none";
    document.getElementById("display2").style.display = "none";
    document.getElementById("display3").style.display = "none";
    document.getElementById("display4").style.display = "none";
    document.getElementById("display5").style.display = "none";
    document.getElementById("display6").style.display = "none";
    document.getElementById("display7").style.display = "none";
    document.getElementById("display8").style.display = "none";
    document.getElementById("display9").style.display = "none";
    document.getElementById("display10").style.display = "none";

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.bookongEditForm.value)
    // this.employeeDetailService.createEmployee(this.adminSignUpForm.value).subscribe();
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;

  }

  show(){
    this.customerServices.viewBookingById(this.bookongEditForm.value.bookingId).subscribe(
      data=>{
      console.log(data);
      this.details = true;  
      this.readonly = false;
        this.booking = data;
        //  var dateTime1 = new Date(st).toISOString().replace(/T.+/, ' 00:00:00')
        this.bookongEditForm= this.formBuilder.group({
          customerUserName : [this.booking.customerUserName,Validators.required],
          idProof : [this.booking.idProof,Validators.required],
          email : [this.booking.email,[Validators.required,Validators.email]],
          roomType : [this.booking.roomType,Validators.required],
          numberOfRoom : [this.booking.numberOfRooms,Validators.required],
          roomSize : [this.booking.roomSize,Validators.required],
          breakfast : [this.booking.breakfast,Validators.required],
          drinks : [this.booking.drinks,Validators.required],
          checkInDate : [this.booking.checkInDate,Validators.required],
          checkOutDate : [this.booking.checkInDate,Validators.required],
          pickUpAndDrop : [this.booking.pickupAndDrop,Validators.required]
        })
    document.getElementById("display1").style.display = "block";
    document.getElementById("display2").style.display = "block";
    document.getElementById("display3").style.display = "block";
    document.getElementById("display4").style.display = "block";
    document.getElementById("display5").style.display = "block";
    document.getElementById("display6").style.display = "block";
    document.getElementById("display7").style.display = "block";
    document.getElementById("display8").style.display = "block";
    document.getElementById("display9").style.display = "block";
    document.getElementById("display10").style.display = "block";
        
      },
      error => console.log(error)
    
    )
    
  }
  readOnly(){
    this.readonly = true;
    document.getElementById("display1").style.display = "none";
    document.getElementById("display2").style.display = "none";
    document.getElementById("display3").style.display = "none";
    document.getElementById("display4").style.display = "none";
    document.getElementById("display5").style.display = "none";
    document.getElementById("display6").style.display = "none";
    document.getElementById("display7").style.display = "none";
    document.getElementById("display8").style.display = "none";
    document.getElementById("display9").style.display = "none";
    document.getElementById("display10").style.display = "none";
  }
  

  getProfile(){
    
    this.bookongEditForm= this.formBuilder.group({
      customerUserName : [this.userName,Validators.required],
      bookingId : ['',Validators.required],
      idProof : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      roomType : ['',Validators.required],
      numberOfRoom : ['',Validators.required],
      roomSize : ['',Validators.required],
      breakfast : ['',Validators.required],
      drinks : ['',Validators.required],
      checkInDate : ['',Validators.required],
      checkOutDate : ['',Validators.required],
      pickUpAndDrop : ['',Validators.required]
    })
    
  }

  updateBooking(){
    // console.log(this.adminEditForm.value)
    this.customerServices.updateBooking(this.bookongEditForm.value, this.bookongEditForm.value.bookingId)
        .subscribe(
          response => {
            console.log(response);
            console.log("#######Updated successfully and navigating");
            this.SuccessMsg = "Details Update Successfully.....";
            // this.router.navigate(['patientDashBoard'])
          },
          error => {
            this.errMessage = "Data not saved"
            console.log(error);
          });
  }


Back(){
  this.router.navigate(["customerDashboard", this.userName]);
}
cancleBooking(){
  this.router.navigate(['cancelBooking',this.userName ]);
}


}

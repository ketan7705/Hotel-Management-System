import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  
  errMessage : string = "";
  message?:String;
  name:String = "ketan123";
  customerEditForm: FormGroup;
  adminId?:number;
  
  

  details = false;
  lable = "Edit";
  readonly = true;
  Id?:number;
  SuccessMsg?:String
  userName?:String;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];

  customer?:Customer;
  constructor(public activatedRoute: ActivatedRoute,public formBuilder:FormBuilder,public router:Router, public customerServices: CustomerService) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.getProfile();
    document.getElementById("dummy").style.display = "none"

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.customerEditForm.value)

    
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;

  }

  show(){
    this.details = true;  
    this.readonly = false;
  }
  readOnly(){
    this.readonly = true;
  }
  

  getProfile(){
    // this.adminId = this.activatedRoute.snapshot.params['adminId'];
    this.customerServices.getCustomer(this.userName).subscribe(data => {
      // console.log(data);
      this.customer = data;
      console.log(this.customer.customerUserName, this.userName)
      this.customerEditForm = this.formBuilder.group({
        customerUserName : [this.customer.customerUserName, Validators.required],
        customerName : [this.customer.customerName,[Validators.required, Validators.minLength(5)]],     
        email : [this.customer.email,[Validators.required,Validators.email]],
        gender : [this.customer.gender, Validators.required],
        mobileNumber : [this.customer.mobileNumber, Validators.required],
        age : [this.customer.age, Validators.required],
        city : [this.customer.city, Validators.required],
        state : [this.customer.state, Validators.required],
        country : [this.customer.country, Validators.required],
        password:[this.customer.password]
      })
    },
      error => console.log(error)
    )
    }
    
  editCustomer(){
    console.log(this.customerEditForm.value)
    this.customerServices.editProfile(this.customerEditForm.value, this.userName)
    .subscribe(
      response => {
        console.log(response);
        this.SuccessMsg = "Details Update Successfully.....";
        console.log("#######Updated successfully");
            // this.router.navigate(['patientDashBoard'])
            this.customerEditForm.reset
          },
          error => {
            this.errMessage = "Data not saved"
            console.log(error);
          });
  }

forgetPassword(){
  this.router.navigate(["updatePassword", this.userName]);
}
Back(){
  this.router.navigate(["customerDashboard", this.userName]);
}


}

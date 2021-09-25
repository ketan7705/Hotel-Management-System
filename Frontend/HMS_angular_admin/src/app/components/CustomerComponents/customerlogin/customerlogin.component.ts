import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

customerLoginForm! : FormGroup;
  errorMessage?:String;
  adminId?:number;

  constructor(public formBuilder:FormBuilder, public router:Router,public customerService:CustomerService) { 
  }

  ngOnInit(): void {
    this.customerLoginForm = this.formBuilder.group({
      customerUserName : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  customerLogin(){
    
    console.log(this.customerLoginForm.value)
    this.customerService.customerLogin(this.customerLoginForm.get('customerUserName').value,this.customerLoginForm.get('password').value)
    .subscribe(() => {
      console.log("Login Successfully!!")
      this.router.navigate(["customerDashboard", this.customerLoginForm.get('customerUserName').value]);
    },error=>{
      this.errorMessage = "You Entered Incorrect Credentials"
      console.log(error, "!!!!!!!!!!!!!!!")
    },
    )
    
  }

  login(){
    // this.router.navigate(["adminDashBoard"])
  }
  sign_up(){
    this.router.navigate(["customerSignUp", "-1"])
    
  }
  back(){
    
    this.router.navigate([""]);
  }

  forgetPassword(){
    this.router.navigate(["updatePassword", "-1"]);
  }

}

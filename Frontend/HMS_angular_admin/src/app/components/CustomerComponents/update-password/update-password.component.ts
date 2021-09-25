import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  password:String = "";
  confirm_password:String = "";
  customerForgetPasswordForm!: FormGroup;
  Id?:number;
  message?:String;
userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.userName = this.activatedRoute.snapshot.params['userName'];
  constructor(public customerSerices: CustomerService ,public activatedRoute:ActivatedRoute,public formBuilder:FormBuilder,public router:Router) { }

  ngOnInit(): void {


    this.userName = this.activatedRoute.snapshot.params['userName'];
   
    if(this.userName =="-1")
    {    
      this.customerForgetPasswordForm = this.formBuilder.group({
      customerUserName : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      password : ['',Validators.required],
      confirm_password : ['',Validators.required]
    })
    }
    else{
      this.customerForgetPasswordForm = this.formBuilder.group({
        customerUserName : [this.userName, Validators.required],
        phoneNumber : ['',Validators.required],
        password : ['',Validators.required],
        confirm_password : ['',Validators.required]
      })

    }

 
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;
  }
  saveData(){
    console.log(this.customerForgetPasswordForm.value);
    this.customerSerices.resetPassword(this.customerForgetPasswordForm.value,this.customerForgetPasswordForm.value.customerUserName)
        .subscribe(
          response => {
            console.log(response);
            this.message = "Your passowrd saved sucessfully"
            console.log("#######Updated successfully and navigating");
            // this.router.navigate(['patientDashBoard'])
          },
          error => {
            console.log(error);
     });
  }
 Back(){

  if(this.userName == "-1"){
    this.router.navigate(["customerLogin", "-1"])

  }else{

    this.router.navigate(["editCustomer", this.userName])
  }
 }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
  adminForm : FormGroup;

  id?:String = "";
  password?:String ="";

  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute, ) { }

  ngOnInit(): void 
  {
    this.adminForm = this.formBuilder.group({
      adminId : ['', [Validators.required]],
      adminpassword : ['', [Validators.required]]
    });
  }


  adminLogin(){
    /* console.log(this.adminForm.value)
      this.adminService.adminLogin( this.adminForm.get('adminId').value,this.adminForm.get('adminpassword').value)
          .subscribe((response) => {
              this.successMessage = "Login Successful";
              console.log(response);
            }, err => this.errorMessage = err) */
    if(this.adminForm.get('adminId').value == "Admin" && this.adminForm.get('adminpassword').value=="Admin@123")
    {
      //this.successMessage = "Login Successful";
      console.log("Login Successful");
      this.router.navigate(['admindashboard']);
    }
    else
    {
      this.WrongLoginNotification()
      console.log("AdminId/password is incorrect");
    }
  }
  WrongLoginNotification(){
    Swal.fire('WRONG', 'Check UserName and Password', 'error')
  }

 
}

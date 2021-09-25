import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-receptionist-login',
  templateUrl: './receptionist-login.component.html',
  styleUrls: ['./receptionist-login.component.css']
})
export class ReceptionistLoginComponent implements OnInit {
  successMessage: any;
  receptionistlogin: FormGroup
  receptionistId?: number
  receptionistPassword?: string
  errorMessage: any;
  constructor(private formBuilder: FormBuilder, public router: Router, public receptionService: ReceptionService) { }

  ngOnInit(): void {
    this.receptionistlogin = this.formBuilder.group({
      receptionistId:['',[Validators.required]],
      receptionistPassword:['',[Validators.required]]
    })
  }
  
  receptionistLogin(){
  this.receptionService.receptionistLogin(this.receptionistlogin.get('receptionistId')?.value,this.receptionistlogin.get('receptionistPassword')?.value)
    .subscribe(
      response => {
       
          this.successMessage ="Your login is successful"
          localStorage.setItem("userIdSession",""+this.receptionistlogin.get('receptionistId')?.value);
          console.log("BDKSNKKDLSKDMSL"+localStorage.getItem("userIdSession"))
          console.log(this.receptionistlogin.get('receptionistId')?.value+ ", you have logged successfully");
        console.log("#######logged successfully ");
        console.log(this.successMessage)
        // window.alert("your log in is successful")
        this.router.navigate(['receptionDashboard',this.receptionistlogin.get('receptionistId')?.value])
          // this.router.navigate(['receptionDashboard',this.receptionistlogin.get('receptionistId')?.value])

              },
      error => {
        this.errorMessage="Your Login details are not matched!"
        console.log(this.receptionistlogin.get('receptionistId')?.value +" check your details");
        console.log(error)
      });
}

return(){
  this.router.navigate(['receptionistoperations', this.receptionistId])
}
back(){
  this.router.navigate([''])
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from 'src/app/models/receptionist';
import { AdminService } from 'src/app/services/adminservice.service';
import { ReceptionistService } from 'src/app/services/receptionist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addreceptionist',
  templateUrl: './addreceptionist.component.html',
  styleUrls: ['./addreceptionist.component.css']
})
export class AddreceptionistComponent implements OnInit {

  errorMessage?: string;
  errphnMessage?:string
  successMessage?: string;
  receptionistId? : Number;
  password?:String;
  Id?:number;
  recEmail?:String;
  
  recphnNo?:String;
  receptionists : Receptionist
  receptionist:Receptionist;
  ReceptionistForm = new FormGroup({});


  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute, public adminService : AdminService,public receptionistService: ReceptionistService) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.receptionistId= this.receptionistId;
    this.ReceptionistForm = this.formBuilder.group({
      receptionistName : ['', [Validators.required, Validators.minLength(5)]],
      receptionistPhoneNumber : ['', [Validators.required,Validators.minLength(10)]],
      receptionistEmail : ['', [Validators.required]],
      receptionistAge : ['', [Validators.required]],
      address  : ['', [Validators.required]],
      experience : ['', [Validators.required]],
      salary : ['', [Validators.required]]
    });
    this.password= this.password;
  }
  check(){
    this.receptionists = this.ReceptionistForm.value;
    console.log("####" +this.receptionists)
    this.recEmail= this.receptionists.receptionistEmail;
    console.log("####" +this.recEmail)
    
    this.receptionistService.getReceptionistByEmail(this.recEmail)
    .subscribe(
      response => {
        console.log(response);
        this.receptionist = response;
      
        if(response == null){
          console.log("Check phn no claled..........")
          this.checkPhnNumber();
        }
        else{
          
          this.errorMessage = " Receptionist Email already exists"
        }
   
      },
      error => {
          
        console.log();
        this.successMessage = "Receptionist Added successfully";
        console.log("#######Receptionist added successfully ");
      });
     
  }
  checkPhnNumber(){
    console.log("Check phn no claled..........")
    this.receptionists = this.ReceptionistForm.value;
    console.log("####" +this.receptionists)
    this.recphnNo= this.receptionists.receptionistPhoneNumber;
    console.log("####" +this.recEmail)
    this.receptionistService.getReceptionistByPhoneNumber(this.recphnNo)
    .subscribe(
      response => {
        console.log(response);
        this.receptionist = response;
        if(response == null){
          console.log("Check phn no claled..........")
          this.addReceptionist();
        }
        else{
          
          this.errphnMessage = " Receptionist PhoneNumber already exists"
        }
      },
      error => {
          
        console.log();
        this.successMessage = "Receptionist Added successfully";
        console.log("#######Receptionist added successfully ");
      });
  }

  addReceptionist(){
    this.adminService.addReceptionist(this.ReceptionistForm.value)
        .subscribe(
          response => {
            console.log(response);
            this.errorMessage = "Not able to add a Receptionist"
            console.log("ERROR in adding Receptionist : " );
          },
          error => {
              
            console.log();
            this.successAlertNotification();
            this.successMessage = "Receptionist Added successfully";
            console.log("#######Receptionist added successfully ");
          });
  }

  back()
  {  
    this.router.navigate(['receptionist'])
  }
  
  successAlertNotification(){
    Swal.fire('Success', 'Registration successfull', 'success')
    this.router.navigate(['receptionist'])
  }

}



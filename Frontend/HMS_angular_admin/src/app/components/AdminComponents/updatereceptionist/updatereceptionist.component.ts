import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from 'src/app/models/receptionist';
import { AdminService } from 'src/app/services/adminservice.service';
import { ReceptionistService } from 'src/app/services/receptionist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatereceptionist',
  templateUrl: './updatereceptionist.component.html',
  styleUrls: ['./updatereceptionist.component.css']
})
export class UpdatereceptionistComponent implements OnInit {

 
  errorMessage?: string;
  successMessage?: string;
  receptionistId? : number;
  password?:String;
  Id?:number;
  ReceptionistForm : FormGroup;
receptionists:Receptionist;
  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute, public adminService : AdminService , public receptionistService:ReceptionistService) { }

  
 
  ngOnInit(): void {
    this.receptionists = new Receptionist();
   this.receptionistId= this.activatedRoute.snapshot.params['receptionistId'];
  
  if(this.receptionistId!=-1){
      this.receptionistService.getReceptionistById(this.receptionistId)
      .subscribe(data=>{
        console.log(data)
        this.receptionists=data
      
    this.ReceptionistForm = this.formBuilder.group({
      receptionistId : [this.receptionists.receptionistId, [Validators.required]],
      receptionistName : [this.receptionists.receptionistName, [Validators.required, Validators.minLength(5)]],
      receptionistPhoneNumber : [this.receptionists.receptionistPhoneNumber, [Validators.required,Validators.minLength(10)]],
      receptionistEmail : [this.receptionists.receptionistEmail, [Validators.required]],
      receptionistPassword: [this.receptionists.receptionistPassword, [Validators.required]],
      receptionistAge : [this.receptionists.receptionistAge, [Validators.required]],
      address  : [this.receptionists.address, [Validators.required]],
      experience : [this.receptionists.experience, [Validators.required]],
      salary : [this.receptionists.salary, [Validators.required]]
     
      })
    })}}

  updateReceptionist(){
    
    console.log(this.ReceptionistForm.value);
    this.adminService.updateReceptionist(this.ReceptionistForm?.value)
    .subscribe(
      response => {
        console.log(response);
        this.errorMessage = "Not able to add a Receptionist"
        console.log("ERROR in adding Receptionist : " );
      },
      error => {
      
        console.log(this.ReceptionistForm.value);
        this.successAlertNotification();
        this.successMessage = "Receptionist updated successfully";
        console.log("#######Receptionist not updated successfully ");
      });
}
back()
{  
  this.router.navigate(['receptionist'])
}
  
successAlertNotification(){
  Swal.fire('Success', 'Receptionist Details Updated Successfully', 'success')
  this.router.navigate(['receptionist'])
}
}
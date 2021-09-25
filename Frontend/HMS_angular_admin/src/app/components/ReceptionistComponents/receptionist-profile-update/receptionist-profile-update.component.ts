import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from 'src/app/models/receptionist';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-receptionist-profile-update',
  templateUrl: './receptionist-profile-update.component.html',
  styleUrls: ['./receptionist-profile-update.component.css']
})
export class ReceptionistProfileUpdateComponent implements OnInit {
  receptionistId?:number;
  receptionistForm:FormGroup;
  receptionist: Receptionist;
  salary?: number;
  experience?: string;
  constructor(public router: Router, public receptionService: ReceptionService, public activatedRoute: ActivatedRoute, public formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.receptionist=new Receptionist()
    this.receptionistId = this.activatedRoute.snapshot.params['receptionistId'];
   if(this.receptionistId!=-1 &&  this.salary!=-1){
    this.receptionService.getReceptionistById(this.receptionistId)
    .subscribe(data => {
      console.log(data),
     this.receptionist = data   
     this.receptionistForm = this.formBuilder.group({
      receptionistId:[this.receptionist.receptionistId,[Validators.required]],
      receptionistName: [this.receptionist.receptionistName, [Validators.required, Validators.minLength(5)]],
      receptionistPassword: [this.receptionist.receptionistPassword, [Validators.required, Validators.minLength(5)]],
      receptionistAge:[this.receptionist.receptionistAge,[Validators.required]],
      receptionistPhoneNumber: [this.receptionist.receptionistPhoneNumber, [Validators.required,Validators.minLength(10)]],
       receptionistEmail: [this.receptionist.receptionistEmail, [Validators.required,Validators.email]],
       address: [this.receptionist.address,[Validators.required]],
       experience:[this.receptionist.experience,[Validators.required]],
       salary:[this.receptionist.salary,[Validators.required]]
       })
     })}}
     updateMyProfile(){
       this.receptionService.updateReceptionist(this.receptionistForm?.value)
       .subscribe(
         response => {
           console.log(response);
           console.log("#######updated successfully "); 
         },
         error => {
           window.alert("Your Details are updated successfully!")
           this.router.navigate(['receptionDashboard', this.receptionistId])
           console.log("ERROR in save : " + error);
         });
 }
 
 return(){
   this.router.navigate(['receptionDashboard', this.receptionistId])
 }
}

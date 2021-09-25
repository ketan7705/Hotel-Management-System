import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PickupAndDrop } from 'src/app/models/pickup-and-drop';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-pickupanddrop',
  templateUrl: './update-pickupanddrop.component.html',
  styleUrls: ['./update-pickupanddrop.component.css']
})
export class UpdatePickupanddropComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
   PickDropForm:FormGroup;
   submitted=false;
   details = false;
  lable = "Edit";
  readonly = true;
  Id?:number = 103;
  SuccessMsg?:String;
  pickupAndDrop?:PickupAndDrop;
  userName?:String;
  display = false
  // public activatedRoute:ActivatedRoute
  // this.userName = this.activatedRoute.snapshot.params['userName'];
  constructor(private formBuilder:FormBuilder, public router:Router,public customerService:CustomerService, public activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.PickDropForm=this.formBuilder.group({
      pickupDropId:['',Validators.required] ,
      typeOfTransport:['',Validators.required] ,
      time:['',Validators.required] ,
      numberOfPassenger:['',Validators.required],
      location: ['', Validators.required],   

       });

       
  }

  onSubmit(){
      this.submitted=true;
      console.log(this.PickDropForm.value)
      // console.log('Sucess!! '+ "\nLocation - " + this.f.location.value + "\nTransport - " + this.f.typeOfTransport.value + "\nTime - " + this.f.time.value + "\nNumber of Passengers - " + this.f.numberOfPassenger.value);
      this.customerService.updatePickAndDrop(this.PickDropForm.value, this.PickDropForm.value.pickupDropId)
      .subscribe(
          response => {
            console.log(response);
            // this.router.navigate([''])
            this.successMessage = "Pickup And Drop added successfully"
            console.log("#######Pickup And Drop Uploaded successfully ");
          },
          error => {
            this.errorMessage = "Admit Form Cancel"
            console.log("ERROR in save : " + error);
          });
  
    }
  get f(){
    return this.PickDropForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.PickDropForm.reset();
  }

  show(){
      console.log(this.PickDropForm.value.pickupDropId)
    this.customerService.getPickAndDrop(this.PickDropForm.value.pickupDropId).subscribe(
      data=>{
        console.log(data);
        this.pickupAndDrop = data;
        this.details = true;
        this.readonly = false;
        this.display = true;
      this.PickDropForm=this.formBuilder.group({
        pickupDropId:[this.pickupAndDrop.pickupDropId,Validators.required] ,
        typeOfTransport:[this.pickupAndDrop.typeOfTransport,Validators.required],
        time:[this.pickupAndDrop.time,Validators.required] ,
        numberOfPassenger:[this.pickupAndDrop.numberOfPassenger,Validators.required],
        location: [this.pickupAndDrop.location, Validators.required],   
       });
       this.PickDropForm.reset
    
  },
  error => console.log(error)
    )
  }
  readOnly(){
    this.readonly = true;
    this.display = false;

  }
  Back(){
    this.router.navigate(["customerDashboard", this.userName]);
  }


}

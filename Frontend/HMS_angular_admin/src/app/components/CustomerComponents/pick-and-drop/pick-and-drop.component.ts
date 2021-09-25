import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pick-and-drop',
  templateUrl: './pick-and-drop.component.html',
  styleUrls: ['./pick-and-drop.component.css']
})
export class PickAndDropComponent {

  errorMessage?: string;
  successMessage?: string;
  PickDropForm:FormGroup;
  submitted=false;
  display = false
  button1 = false
  button2 = false
  Id?:any;
  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  

  constructor(public activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, public router:Router,public customerService:CustomerService ) { }

  ngOnInit() {

    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.Id = this.activatedRoute.snapshot.params['Id'];
    console.log(this.Id);
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    if(this.Id == "-2"){
      this.display = true;
      this.button2 = true;
      document.getElementById("button2").style.display = "block";
      this.PickDropForm=this.formBuilder.group({
        pickupDropId:['',Validators.required],
        typeOfTransport:['',Validators.required] ,
        time:['',Validators.required] ,
        numberOfPassenger:['',Validators.required],
        location: ['', Validators.required],   
         });
    }
    else{
      document.getElementById("button1").style.display = "block";
    console.log(this.Id, this.userName);
    this.PickDropForm=this.formBuilder.group({
      pickupDropId:[this.Id,Validators.required],
      typeOfTransport:['',Validators.required] ,
      time:['',Validators.required] ,
      numberOfPassenger:['',Validators.required],
      location: ['', Validators.required],   
       });
      }
  }

  onSubmit(){
      this.submitted=true;
      console.log(this.PickDropForm.value)
      console.log('Sucess!! '+ "\nLocation - " + this.f.location.value + "\nTransport - " + this.f.typeOfTransport.value + "\nTime - " + this.f.time.value + "\nNumber of Passengers - " + this.f.numberOfPassenger.value);
      this.customerService.addPickAndDrop(this.PickDropForm.value)
      .subscribe(
          response => {
            console.log(response);
            // this.router.navigate([''])
            this.successMessage = "Pickup And Drop added successfully"
            console.log("#######Pickup And Drop Uploaded successfully ");
            this.router.navigate(["confirmBooking", this.userName, this.Id]);
          },
          error => {
            this.errorMessage = "Pick Up Form Cancel"
            console.log("ERROR in save : " + error);
          });
  
    }
  get f(){
    return this.PickDropForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.customerService.cancelBooking(this.Id).subscribe(
      data=>{
        console.log("delete successfully!!!", data);
        this.router.navigate(["customerDashboard", this.userName]);
      },
      error=>console.log("error got")
    )
  }
  Back(){
    this.router.navigate(["customerDashboard", this.userName]);
  }
}

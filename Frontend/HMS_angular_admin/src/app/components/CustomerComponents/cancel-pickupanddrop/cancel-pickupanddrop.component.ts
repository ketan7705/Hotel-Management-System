import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cancel-pickupanddrop',
  templateUrl: './cancel-pickupanddrop.component.html',
  styleUrls: ['./cancel-pickupanddrop.component.css']
})
export class CancelPickupanddropComponent implements OnInit {
  cancelPickupAndDrop: FormGroup;
  errorMessage?:String;
  pickupAndDropId? : number;
  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];

  constructor(public formBuilder:FormBuilder, public router:Router,public customerService:CustomerService, public activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.cancelPickupAndDrop = this.formBuilder.group({
      pickupAndDropId : ['', Validators.required],
      customerUserName : ['', Validators.required],
      reason : ['', Validators.required]
    })

  }
  sendCancelPickupAndDrop(data: any){
    console.log(this.cancelPickupAndDrop?.value);
    console.log(data.pickupAndDropId);
  
    this.customerService.cancelPickAndDrop(data.pickupAndDropId)
      .subscribe(
        response => {
          console.log(response);
          // this.successMessage = doctorId +" :   successfully deleted";
          console.log("#######Deleted successfully ");
        },
        error => {
          console.log(error);
        });
  }
  Back(){
    this.router.navigate(["customerDashboard", this.userName]);
  }

}

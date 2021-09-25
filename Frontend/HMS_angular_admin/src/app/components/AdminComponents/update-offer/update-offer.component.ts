import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  constructor(public activatedRoute :ActivatedRoute,public formBuilder:FormBuilder, public router: Router,public offerSerivce:OfferService) { }

  
  offerId?:number
  addOfferForm?:FormGroup
  errorMessage?:string;
  offer?:Offer;
  discountValue=0;

  ngOnInit(): void {
    this.offer=new Offer()
    this.offerId = this.activatedRoute.snapshot.params['offerId'];
      console.log("####OfferId: ",this.offerId)

      this.offerSerivce.getOfferById(this.offerId)
      .subscribe(data=>{
        console.log(data)
        this.offer=data
        

      this.addOfferForm=this.formBuilder.group({
      offerId: [this.offer.offerId, [Validators.required]],
      roomType: [this.offer.roomType, [Validators.required]],
      roomSize: [this.offer.roomSize, [Validators.required]],
      offerName: [this.offer.offerName, [Validators.required]],
      offerFromDate: [this.offer.offerFromDate, [Validators.required]],
      offerToDate: [this.offer.offerToDate, [Validators.required]],
      offerDetails: [this.offer.offerDetails, [Validators.required]],
      termsAndConditions: [this.offer.termsAndConditions, [Validators.required]],
      discountPercentage: [this.offer.discountPercentage, [Validators.required,Validators.min(0)]],
      })

  })}

  updateOffer(){
    this.offer=this.addOfferForm?.value
    if(this.offer.offerFromDate==this.offer.offerToDate  )
    {
      this.errorMessage="***From and To Date are same!"
    }
    else if(this.offer.offerFromDate>=this.offer.offerToDate )
    {
      this.errorMessage="***Not a valid from and to date"
    }
    else{
    this.offerSerivce.updateOffer(this.addOfferForm?.value)
    .subscribe(
      response => {
        console.log(response);
        console.log("#######updated successfully ");
      },
      error => {
        this.successNotification();
        this.router.navigate(['showoffers'])
        console.log("ERROR in save : " + error);
      });
  
}
}

successNotification(){
  Swal.fire('Success', 'Offer Updated Successfully!', 'success')
}
}

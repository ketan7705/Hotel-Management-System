import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offeroperations',
  templateUrl: './offeroperations.component.html',
  styleUrls: ['./offeroperations.component.css']
})
export class OfferoperationsComponent implements OnInit {

  show?:boolean;
  showTextBox?:boolean;
  offers: Offer[] = [] ;
  offer?:Offer;
  viewOffer?:boolean;
  searchOfferForm?:FormGroup
  successMessage?:string

  constructor(public router:Router,public offerService:OfferService,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.searchOfferForm=this.formBuilder.group({
      offerId: ['', [Validators.required]]
    })
  }
  searchOffer(){
    this.showTextBox=true
    this.show=false
    this.viewOffer=false
   }

   searchOfferById(){
    
    this.offerService.getOfferById(this.searchOfferForm.get('offerId')?.value).subscribe(
      res=>{
   
        if(res==null)
        { 
          window.alert("Offer Id:"+this.searchOfferForm.get('offerId')?.value+" Doesn't exists!")
          this.showTextBox=false
          this.show=false
          this.viewOffer=false
          this.router.navigate(['offeroperations'])
        }
        else{
        this.offer=res
        this.showTextBox=false
        this.show=false
        this.viewOffer=true
        console.log(this.offer)
        }
      }
    )
}

deleteOffer(offerId:any)
  {
    this.offerService.deleteOffer(offerId)
    
        .subscribe(
          response => {
            console.log(response);
            console.log("#######deleted successfully ");
          },
          error => {

            this.router.navigate(['offeroperations'])
            window.alert("offer Id: "+offerId+"Deleted Successfully!!")
            this.show=false
            this.viewOffer=false
            console.log(error);
          });
          this.successMessage = "Offer Id: "+offerId +" :   successfully deleted"
  }

  editOffer(offerId:number)
  {
    this.router.navigate(['updateoffers',offerId])
  }

}

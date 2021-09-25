import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-searchoffer',
  templateUrl: './searchoffer.component.html',
  styleUrls: ['./searchoffer.component.css']
})
export class SearchofferComponent implements OnInit {

 
  show?:boolean;
  showTextBox?:boolean;
  offer:Offer[]=[];
  viewOffer?:boolean;
  searchOfferForm?:FormGroup
  successMessage?:string
  errorMessage?:string;
  constructor(public router:Router,public offerService:OfferService,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.searchOffer();
    this.searchOfferForm=this.formBuilder.group({
      roomType: ['', [Validators.required]]
    })
  }
  searchOffer(){
    this.showTextBox=true
    this.show=false
    this.viewOffer=false
   }

   searchOfferById(){
    
    this.offerService.getOfferByRoomType(this.searchOfferForm.get('roomType')?.value).subscribe((data:any[])=>{
          console.log("####Getting all offers from DB through Spring..")
          console.log(data);
          this.offer=data;
        },err=>this.errorMessage=err)
      
        this.showTextBox=false
        this.show=false
        this.viewOffer=true
        console.log(this.offer)
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
            this.show=false
            this.viewOffer=false
            console.log(error);
          });
          
  }

  editOffer(offerId:number)
  {
    this.router.navigate(['updateAOffer',offerId])
  }

  alertConfirmation(offerId:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        this.deleteOffer(offerId)
        Swal.fire(
          'Removed!',
          'Offer removed successfully!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Offer Not Deleted!!',
          'error'
        )
      }
    })
  }  
}

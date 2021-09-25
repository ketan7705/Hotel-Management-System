import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Receptionist } from 'src/app/models/receptionist';
import { ReceptionistService } from 'src/app/services/receptionist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewrecby-id',
  templateUrl: './viewrecby-id.component.html',
  styleUrls: ['./viewrecby-id.component.css']
})
export class ViewrecbyIdComponent implements OnInit {

  receptionists:Observable<Receptionist[]>|any
  showrec?:boolean;
  show?:boolean;
  showid?:boolean;
  receptionistForm = new FormGroup({});

  constructor(public receptionistService:ReceptionistService,public router:Router,
    public formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.showrec = true;
    this.receptionistForm = this.formBuilder.group({
     
      receptionistId: ['', [Validators.required]],
      })
    
  }
  viewReceptionistById(){
    this.receptionistService.getReceptionistById(this.receptionistForm?.value.receptionistId).subscribe(
     res=>{
       
             if(res == null){
               this.WrongIdNotification();
             }
             else{
       this.showid=true
       this.receptionists=res
       this.show = false
       this.showrec=false
       this.receptionists=Array.of(this.receptionists)
       console.log(res);
     }
    }
    )
  }
  back(){
    this.router.navigate(['receptionist'])
  }
  WrongIdNotification(){
    Swal.fire('Not Found', 'Check the Receptionist Id', 'error')
  }


}

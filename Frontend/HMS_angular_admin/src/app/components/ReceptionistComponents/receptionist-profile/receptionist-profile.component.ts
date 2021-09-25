import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from 'src/app/models/receptionist';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-receptionist-profile',
  templateUrl: './receptionist-profile.component.html',
  styleUrls: ['./receptionist-profile.component.css']
})
export class ReceptionistProfileComponent implements OnInit {
  receptionist: Receptionist|any
  receptionistId:number;
  constructor(public router: Router, public receptionService: ReceptionService, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.receptionistId = this.activatedRoute.snapshot.params['receptionistId'];
    console.log(this.receptionistId)
      this.receptionService.getReceptionistById(this.receptionistId)
        .subscribe(data => {
          console.log(data),
            this.receptionist = data
        },
          error => console.log(error)
        )
}
editProfile(){
  console.log("Edit details")
  this.router.navigate(['receptionistprofileupdate', this.receptionistId])
}
back(){
  this.router.navigate(['receptionDashboard'])
}

}

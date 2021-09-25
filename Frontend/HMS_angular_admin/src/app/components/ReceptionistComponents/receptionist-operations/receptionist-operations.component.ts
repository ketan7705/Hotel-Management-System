import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receptionist-operations',
  templateUrl: './receptionist-operations.component.html',
  styleUrls: ['./receptionist-operations.component.css']
})
export class ReceptionistOperationsComponent implements OnInit {
  receptionistId?:number;
  edit?: number= -1;
  constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.receptionistId = this.activatedRoute.snapshot.params['receptionistId'];
  }

  myProfile(){
    this.router.navigate(['receptionistprofile', this.receptionistId])
  }
  bookingsList(){
    this.router.navigate([''])
  }
  home(){
    console.log("Returning Home")
    this.router.navigate([''])
  }
  logout(){
    console.log("Returning to Receptionist Login Page")
    this.router.navigate(['receptionistlogin'])
  }
}

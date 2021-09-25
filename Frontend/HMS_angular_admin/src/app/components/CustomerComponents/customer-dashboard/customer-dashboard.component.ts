import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.userName = this.activatedRoute.snapshot.params['userName'];

  constructor(public router : Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
  }
  billing(){
    this.router.navigate(['billing', this.userName]);
  }
  book(){
    this.router.navigate(['customerBooking',this.userName ]);
    
  }
  cancleBooking(){
    
    this.router.navigate(['cancelBooking',this.userName ]);
  }
  updateBooking(){
    
    this.router.navigate(['editBooking',this.userName ]);
  }
  addPickDrop(){
    
    this.router.navigate(['addPickAndDrop',this.userName, "-2"]);
  }
  canclePickDrop(){
    this.router.navigate(['cancelPickAndDrop',this.userName ]);
  }
  updatePickDrop(){
    this.router.navigate(['updatePickAndDrop',this.userName ]);
  }
  viewHistory(){
    this.router.navigate(['viewBookingHistory',this.userName ]);
  }
}

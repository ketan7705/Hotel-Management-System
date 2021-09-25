import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homenavbar',
  templateUrl: './homenavbar.component.html',
  styleUrls: ['./homenavbar.component.css']
})
export class HomenavbarComponent implements OnInit {

  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  constructor(public router:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoCustomer(){
    this.router.navigate(['customerLogin',"-1"]);
  }

}

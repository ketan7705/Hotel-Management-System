import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offernavbar',
  templateUrl: './offernavbar.component.html',
  styleUrls: ['./offernavbar.component.css']
})
export class OfferNavbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    
    this.router.navigate(["AdminLogin"])
  }
}

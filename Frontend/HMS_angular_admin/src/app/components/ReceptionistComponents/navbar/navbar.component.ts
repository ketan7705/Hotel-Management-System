import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-receptionist',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponentReceptionist implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  bookingNavigate(){
    this.router.navigate(['bookingsPage'])
  }

}

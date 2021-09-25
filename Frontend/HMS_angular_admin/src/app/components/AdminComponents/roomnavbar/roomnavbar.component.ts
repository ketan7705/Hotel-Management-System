import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomnavbar',
  templateUrl: './roomnavbar.component.html',
  styleUrls: ['./roomnavbar.component.css']
})
export class RoomNavbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    
    this.router.navigate(["AdminLogin"])
  }
}

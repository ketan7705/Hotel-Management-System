import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptionist-navbar',
  templateUrl: './receptionist-navbar.component.html',
  styleUrls: ['./receptionist-navbar.component.css']
})
export class ReceptionistNavbarComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit(): void {
  }
  view(){
    
    this.router.navigate(['viewall'])
  }
  viewid(){
    
    this.router.navigate(['viewid'])
  }
 
  add(){
    this.router.navigate(['addrec'])
  }
  logout(){
    
    this.router.navigate(["AdminLogin"])
  }
}

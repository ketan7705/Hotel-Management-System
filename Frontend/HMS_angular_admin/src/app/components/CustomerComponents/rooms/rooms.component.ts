import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class CustomerRoomsComponent implements OnInit {
  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.userName = this.activatedRoute.snapshot.params['userName'];
  constructor(public activatedRoute:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
  }

}

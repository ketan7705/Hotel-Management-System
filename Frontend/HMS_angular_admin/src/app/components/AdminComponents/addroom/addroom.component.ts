import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddroomService } from 'src/app/services/addroom.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {
  addRoomForm?: FormGroup;
  constructor(public addroomService: AddroomService, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.addRoomForm = this.formBuilder.group({
      roomId: ['',[ Validators.required,Validators.min(1)]],
      floorNumber:['',[Validators.required,Validators.min(1)]],
      roomSize:['',Validators.required],
      roomType:['',Validators.required],
      roomPrice:['', [Validators.required,Validators.min(1000)]],
      roomView:['',Validators.required]
      
    })
  }


  addRoomDetails(){
    this.addroomService.addRoom(this.addRoomForm?.value)
    .subscribe(
      response => {
        console.log(response);
        this.successNotification();
        this.router.navigate(['adminFunc'])
      }
     );
      console.log(this.addRoomForm?.value)
}
return(){
  this.router.navigate(['adminFunc'])
}
successNotification(){
  Swal.fire('Success', 'Room Added Successfully!', 'success')
}
  }


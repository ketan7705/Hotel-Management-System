import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { AddroomService } from 'src/app/services/addroom.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  editRoomForm:FormGroup;
  room:Room;
  roomId?:number;
  constructor(public router:Router,public addRoomService:AddroomService,public activatedRoute:ActivatedRoute,
    public formBuilder:FormBuilder) { }

 
  ngOnInit(): void {
    this.room=new Room()
   this.roomId = this.activatedRoute.snapshot.params['roomId'];
  
  if(this.roomId!=-1){
      this.addRoomService.getRoomById(this.roomId)
      .subscribe(data=>{
        console.log(data)
        this.room=data
      
    this.editRoomForm = this.formBuilder.group({
      roomId:[this.room.roomId,[Validators.required]],
      floorNumber: [this.room.floorNumber, [Validators.required, Validators.min(1)]],
      roomSize: [this.room.roomSize,[Validators.required]],
     
      roomType: [this.room.roomType, [Validators.required]],
      roomPrice: [this.room.roomPrice, [Validators.required,,Validators.min(1000)]],
      roomView: [this.room.roomView, [Validators.required]]
     
      })
    })}}
    updateDetails(){
      this.addRoomService.updateRoom(this.editRoomForm?.value)
      .subscribe(
        response => {
          console.log(response);
          console.log("#######updated successfully ");
          this.successNotification()
          this.router.navigate(['adminFunc'])
          
        });
}
return(){
  this.router.navigate(['adminFunc'])
}


successNotification(){
  Swal.fire('Success', 'Room Updated Successfully!', 'success')
}

}

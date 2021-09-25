import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { AddroomService } from 'src/app/services/addroom.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewrooms',
  templateUrl: './viewrooms.component.html',
  styleUrls: ['./viewrooms.component.css']
})
export class ViewroomsComponent implements OnInit {

  rooms: Room[] = [] ;
  searchRoomId:Boolean = false;
  roomId?:number;
  show?:boolean;
  searchRoomForm?:FormGroup;
  txtValue:any = null;
  errorMessage?:String;
  constructor(public router:Router,public addRoomService:AddroomService,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    
      this.viewRooms();
      this.searchRoomForm = this.formBuilder.group({
        roomId: ['', Validators.required]
      })
  }
 
  
  

    editRoom(roomId:number){
      this.router.navigate(['editRoom',roomId])
    }
  deleteRoom(roomId:number){
    this.addRoomService.deleteRoom(roomId).subscribe(
      (res:any)=>{
          this.viewRooms()
        });
  }
  viewRooms() {
    this.addRoomService.getAllRooms().subscribe(
      (res:any)=>{
       this.show=true
        this.rooms=res
        console.log(res);
       console.log(res);
       
       
     }
    )}  
  
  
  return(){
    this.router.navigate(['adminFunc'])
  }
  searchRoom(){
    console.log(this.searchRoomId)
    console.log(this.searchRoomForm.get('roomId')?.value)
    if(this.txtValue==null){
      this.viewRooms()
    }
    else{
      this.addRoomService.getRoomById(this.searchRoomForm.get('roomId')?.value).subscribe(res =>{
        this.rooms = [];
        this.rooms[0] = res;
        console.log(this.rooms[0])
        if(this.rooms[0] == null){
          this.errorMessage = "No records found"
        }
        else{
          this.errorMessage = ""
        }
      })
    }
  }
  alertConfirmation(roomId:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        this.deleteRoom(roomId)
        Swal.fire(
          'Removed!',
          'Room removed successfully!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Room Not Deleted!!',
          'error'
        )
      }
    })
  }  
}






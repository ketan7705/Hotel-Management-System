import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { AddroomService } from 'src/app/services/addroom.service';

@Component({
  selector: 'app-adminfunctions',
  templateUrl: './adminfunctions.component.html',
  styleUrls: ['./adminfunctions.component.css']
})
export class AdminfunctionsComponent implements OnInit {

  show?:boolean;
  showTextBox?:boolean;
  rooms: Room[] = [] ;
  room?:Room;
  viewRoom?:boolean;
  searchRoomForm=new FormGroup
  ({
    roomId:new FormControl('',[Validators.required])
  })
  constructor(public router:Router,public addRoomService:AddroomService) { }

  ngOnInit(): void {
  }
  addRoom(){
    this.router.navigate(['addRoom'])
  }
  viewRooms(){
    this.addRoomService.getAllRooms().subscribe(
      (res:any)=>{
        this.show=true
        this.showTextBox=false
        this.viewRoom=false
        this.rooms=res
        console.log(res);
       console.log(res);
       
       
     }
    )}
   searchRoom(){
    this.showTextBox=true
    this.show=false
    this.viewRoom=false
   }

  searchRoomById(){
    
    this.addRoomService.getRoomById(this.searchRoomForm.get('roomId')?.value).subscribe(
      res=>{
        /* this.room=res
        this.showTextBox=false
        this.show=false
        this.viewRoom=true */
        if(res==null){
          window.alert("Room is not available for given RoomId! check it and try again...")
          this.showTextBox=false
          this.show=false
          this.viewRoom=false
          this.router.navigate(['adminFunc'])

        }
        else{
        this.room=res
        this.showTextBox=false
        this.show=false
        this.viewRoom=true
        }
      }
    )
}
  
  editRoom(roomId:number){
    this.router.navigate(['editRoom',roomId])
  }
deleteRoom(roomId:number){
  this.addRoomService.deleteRoom(roomId).subscribe(
    (res:any)=>{
      
      window.alert("You have deleted the room with Id:"+roomId)
        this.viewRooms()
       
      });
}


return(){
  this.router.navigate(['rooms'])
}

}

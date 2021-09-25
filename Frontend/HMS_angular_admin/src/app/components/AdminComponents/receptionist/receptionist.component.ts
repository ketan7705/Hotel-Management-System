import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Receptionist } from 'src/app/models/receptionist';
import { ReceptionistService } from 'src/app/services/receptionist.service';


@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent implements OnInit {
  successMessage?: string;
  errorMessage ?:string;
  showrec?:boolean;
  show?:boolean;
  showid?:boolean;
  receptionistForm = new FormGroup({});

 
  // receptionists: Receptionist[] = [];
 receptionists:Observable<Receptionist[]>|any

  constructor(public receptionistService:ReceptionistService,public router:Router,
   public formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.receptionistForm = this.formBuilder.group({
     
      receptionistId: ['', [Validators.required]],
      })
  }
  viewid(){
    
    this.router.navigate(['viewid'])
  }
  view(){
    
    this.router.navigate(['viewall'])
  }
  add(){
    this.router.navigate(['addrec'])
  }
  edit(receptionistId:number){
    this.router.navigate(['editrec',receptionistId])
  }
  delete(receptionistId : number){
    this.receptionistService.deleteReceptionistId(receptionistId).subscribe(response => {
      console.log(response);
      console.log("#######deleted successfully ");
      window.alert("Recepitonist deleted successfully");
      this.viewReceptionists();
    
      
    
    },
    error => {
      window.alert("Receptionist deleted successfully");
      this.refresh();
      
     
      console.log(error);
    });
    this.successMessage = receptionistId +" :   successfully deleted"
  }
  viewReceptionists(){

  this.receptionistService.getAllReceptionists().subscribe(
    (res:any[])=>{
      this.show=true
      this.receptionists=res
      this.showrec=false;
      this.showid=false
      console.log(res);
    }
  )}
/*   viewAppointmentById(){
    this.searchdoctorService.getappointmentHistoryById(this.patientForm?.value.patientId).subscribe(
      (      res: any)=>{
           this.viewId=true
           this.show=false
           this.view=false
          this.showDoctor=false
          this.textbox=false
           this.patientAppointment=res
           console.log(res)
           
     }
       )
     } */
     viewReceptionistById(){
       this.receptionistService.getReceptionistById(this.receptionistForm?.value.receptionistId).subscribe(
        res=>{
          
     
          this.showid=true
          this.receptionists=res
          this.show = false
          this.showrec=false
          this.receptionists=Array.of(this.receptionists)
          console.log(res);
        }
       )
     }
  viewById(){
    this.showrec = true;
    this.show=false
  }
 
  refresh(){
    this.receptionistService.getAllReceptionists().subscribe(
      (res:any[])=>{
        this.show=true
        this.receptionists=res
        this.showrec=false;
        this.showid=false
        console.log(res);
      }
    )
}


}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';


@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
  errorMessage ?:string;
  successMessage ?:string;
  constructor(public feedbackService:FeedbackService,public router:Router) { }
   feedbacks:Feedback[]=[]
  ngOnInit(): void {
    this.refreshFeedbacks();
  }



  deleteFeedback(feedbackId:number){
    this.feedbackService.deleteFeedback(feedbackId)
    .subscribe(
      response=>{
        console.log(response);
        console.log("deleted");
      },
      error =>{
        this.successMessage=feedbackId +": is deleted";
        
        this.router.navigate(['view'])
        this.refreshFeedbacks()
        console.log(error);
      });
  }

  refreshFeedbacks(){
    this.feedbackService.getFeedbacks().subscribe((data:any[])=>{
      console.log(" received ")
      console.log(data);
      this.feedbacks=data;
    },err => this.errorMessage = err)
  
  }
}

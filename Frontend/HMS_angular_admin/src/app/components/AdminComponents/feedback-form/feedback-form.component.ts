import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';


@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm?: FormGroup;
  feedback: Feedback;
  constructor(public activatedRoute: ActivatedRoute,public feedbackService:FeedbackService, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    // this.feedback=new Feedback();
    this.feedbackForm=this.formBuilder.group({
     
      username :['',Validators.required],
      phoneNumber :['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      rating :['',[Validators.required,Validators.max(5),Validators.min(1)]],
      customerName :['',[Validators.required]],
      suggestion :['',[Validators.required]],
      
    })

  }


  saveFeedback(){

    this.feedbackService.saveFeedback(this.feedbackForm?.value)
    .subscribe(
      response => {
        console.log(response);
        console.log("#######Saved successfully ");
      },
      error => {
        this.router.navigate(['form'])
        console.log(error);
        
      });
  }
}

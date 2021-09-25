import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { Feedback } from '../models/feedback';


const feedbackURL="http://localhost:9091/feedback"
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public http:HttpClient) { }
  saveFeedback(feedback:Feedback):Observable<Feedback>{
    return this.http.post<Feedback>(feedbackURL,feedback,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
      
    )
   }

   getFeedbacks():Observable<Feedback[]>{
    return this.http.get<Feedback []>(feedbackURL)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
      
    )
   }

   deleteFeedback(feedbackId:number):Observable<Feedback>{
    return this.http.delete(`${feedbackURL}/${feedbackId}`)
     .pipe(
       retry(1),
       catchError(this.errorHandler)
       
     )
    }

   errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
  errorMessage = error.error.message;
    } else {
      // Get server-side error
  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}}

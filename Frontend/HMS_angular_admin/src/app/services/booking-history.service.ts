import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators'
import { BookingHistory } from '../models/booking-history';

const bookingHistoryUrl = "http://localhost:9090/viewbookinghistory"

@Injectable({
  providedIn: 'root'
})
export class BookingHistoryService {

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }

  getBookingHistory(): Observable<BookingHistory[]>{
    return this.httpClient.get<BookingHistory[]>(bookingHistoryUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getBookingById(bookingId : number): Observable<BookingHistory>{
    return this.httpClient.get<BookingHistory>(`${bookingHistoryUrl}/${bookingId}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getBookingByCustomerName(customerUserName : String): Observable<BookingHistory[]>{
    return this.httpClient.get<BookingHistory[]>(`${bookingHistoryUrl}/customer/${customerUserName}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getBookingByRoomType(roomType : String): Observable<BookingHistory[]>{
    return this.httpClient.get<BookingHistory[]>(`${bookingHistoryUrl}/roomDetails/type/${roomType}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getBookingByRoomNumber(roomNumber : number): Observable<BookingHistory[]>{
    return this.httpClient.get<BookingHistory[]>(`${bookingHistoryUrl}/roomDetails/number/${roomNumber}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  sortingBookingDetails(sortingType:String): Observable<BookingHistory[]>{
    console.log("sorting method is called")
    return this.httpClient.get<BookingHistory[]>(`${bookingHistoryUrl}/sorting/${sortingType}`)
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
  }
}

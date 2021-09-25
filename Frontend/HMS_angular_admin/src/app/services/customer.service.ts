import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';
import { Bookings } from '../models/bookings';
import { Customer } from '../models/customer';
import { ForgetPassword } from '../models/forget-password';
import { PickupAndDrop } from '../models/pickup-and-drop';


const customerURL = "http://localhost:9090/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side message
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    switch (error.status) {
      case 200:
        console.log("200's");
        // return throwError("errormsg");
        // return null;
        break;
      case 401:
        break;
      case 403:
        break;
      case 0:
      case 400:
      case 201:
      case 406:
      case 409:
      case 500:
        break;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  //http://localhost:9091/customer
  customerSignup(customer: Customer): Observable<String> {
    return this.httpClient.post<String>(customerURL, customer).pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }
  //http://localhost:9091/customer/Ketan123/123456
  customerLogin(customerUserName: String, password: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${customerURL}/${customerUserName}/${password}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }
  //http://localhost:9091/customer/Ketan123
  getCustomer(customerUserName: String): Observable<Customer> {
    return this.httpClient.get<Customer>(`${customerURL}/${customerUserName}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }


  //http://localhost:9091/patient/editProfile/ketan123
  editProfile(customer: Customer, customerUserName: String): Observable<Customer> {
    return this.httpClient.put<Customer>(`${customerURL}/updateProfile/${customerUserName}`, customer).pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //http://localhost:9091/patient/resetPassword/ketan123
  resetPassword(forgetPassword: ForgetPassword, customerUserName: string): Observable<ForgetPassword> {
    console.log("service called");
    return this.httpClient.put<ForgetPassword>(`${customerURL}/resetPassword/${customerUserName}`, forgetPassword).pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }
  //http://localhost:9091/patient/addPickAndDrop
  addPickAndDrop(pickAndDrop: PickupAndDrop): Observable<PickupAndDrop> {
    return this.httpClient.post<PickupAndDrop>(`${customerURL}/addPickAndDrop`, pickAndDrop, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }
  //http://localhost:9091/patient/addPickAndDrop
  updatePickAndDrop(pickAndDrop:PickupAndDrop,pickAndDropId: number): Observable<PickupAndDrop> {
    return this.httpClient.put<PickupAndDrop>(`${customerURL}/updatePickAndDrop/${pickAndDropId}`, pickAndDrop, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  //http://localhost:9091/customer/getPickAndDrop/103
  getPickAndDrop(pickupAndDropId: number): Observable<PickupAndDrop> {
    return this.httpClient.get<PickupAndDrop>(`${customerURL}/getPickAndDrop/${pickupAndDropId}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }


  //http://localhost:9091/patient/cancelPickAndDrop/pickAndDropId
  cancelPickAndDrop(pickupAndDropId: number): Observable<PickupAndDrop> {
    return this.httpClient.delete<PickupAndDrop>(`${customerURL}/cancelPickAndDrop/${pickupAndDropId}`, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }
  //http://localhost:9090/customer/viewBill/Ketan123
  viewBill(customerUserName: String): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${customerURL}/viewBill/${customerUserName}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  //http://localhost:9091/patient/bookingForm
  bookingForm(booking: Bookings): Observable<Bookings> {
    return this.httpClient.post<Bookings>(`${customerURL}/bookingForm`, booking, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  //http://localhost:9091/customer/viewBookingHistory/Ketan123
  viewBookingHistory(customerUserName: String): Observable<Bookings[]> {
    return this.httpClient.get<Bookings[]>(`${customerURL}/viewBookingHistory/${customerUserName}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  //http://localhost:9091/customer/viewBookingByRoomId/Ketan123
  viewBookingById(bookingId: number): Observable<Bookings> {
    return this.httpClient.get<Bookings>(`${customerURL}/viewBookingByRoomId/${bookingId}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  //http://localhost:9091/customer/addPickAndDrop
  updateBooking(booking:Bookings, bookingId: number): Observable<Bookings> {
    return this.httpClient.put<Bookings>(`${customerURL}/updateBooking/${bookingId}`, booking, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  //http://localhost:9091/customer/cancelBooking/bookingId
  cancelBooking(bookingId: number): Observable<Bookings> {
    return this.httpClient.delete<Bookings>(`${customerURL}/cancelBooking/${bookingId}`, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

}

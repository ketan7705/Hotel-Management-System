import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Bookings } from '../models/bookings';
import { Receptionist } from '../models/receptionist';
import { Room } from '../models/room';


const bookingsUrl  = "http://localhost:9090/bookRoom"

const receptionUrl = "http://localhost:9090/Reception"

const roomURL="http://localhost:9090/room";


@Injectable({
  providedIn: 'root'
})


export class ReceptionService {

  constructor(public httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getBookings():Observable<Bookings[]>{
   
    return this.httpClient.get<Bookings[]>(bookingsUrl).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  getBookingsHistory():Observable<Bookings[]>{
    return this.httpClient.get<Bookings[]>(bookingsUrl+"/bookingHistory").pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

 cancelBooking(userName:string,customerCheckIn:string):Observable<Bookings>{
    return this.httpClient.put<Bookings>(receptionUrl+"/"+`${userName}`+"/"+`${customerCheckIn}`,this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  } 

  getCancelBookings():Observable<Bookings[]>{
    return this.httpClient.get<Bookings[]>(receptionUrl + "/requests/yes").pipe(
      retry(0),
      catchError(this.errorHandler) 
    )
  }

  deleteHistory(bookingId:number):Observable<Bookings>{
    return this.httpClient.delete<Bookings>(bookingsUrl + "/history/" + `${bookingId}`) .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  updateCheckInStatus(customerUserName:string):Observable<Bookings>{
    return this.httpClient.put<Bookings>(receptionUrl + "/status/" + `${customerUserName}` + "/IN", this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  updateCheckOutStatus(customerUserName:string):Observable<Bookings>{
    return this.httpClient.put<Bookings>(receptionUrl + "/status/" + `${customerUserName}` + "/OUT", this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  updateBookedStatus(customerUserName:string):Observable<Bookings>{
    return this.httpClient.put<Bookings>(receptionUrl + "/status/" + `${customerUserName}` + "/booked", this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }


  //Pranahitha's work
  getRecordByUserName(userName ?: string) : Observable<Bookings>
  {
  return this.httpClient.get<Bookings>(`${bookingsUrl}/bookingByUserName/${userName}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
}

getBookingRooms(roomNumber:number):Observable<Bookings[]>{
  return this.httpClient.get<Bookings[]>(`${bookingsUrl}/RetrieveBookingRoom/${roomNumber}`)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
  }

  updateBookingRecord(roomNumber:number,userName:string):Observable<Bookings>
  {
    console.log("method calling - update")
    return this.httpClient.put<Bookings>(`${bookingsUrl}/updateBookingByRoomNumber/${roomNumber}/${userName}`,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  getAllRoomsByStatus(roomStatus:boolean) : Observable<Room[]>
  {
    return this.httpClient.get<Room[]>(`${roomURL}/roomByStatus/${roomStatus}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  updateRoomByStatus(roomStatus:boolean,roomId:number)
  {
    console.log("method calling - update")
    return this.httpClient.put<Room>(`${roomURL}/updateRoomByStatus/${roomId}/${roomStatus}`,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  sendEmail(userName:string):Observable<Bookings[]>
  {
    return this.httpClient.get<Bookings[]>(`${bookingsUrl}/tosendMail/${userName}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
    }

getAllRooms():Observable<Room[]>
{
  return this.httpClient.get<Room[]>(`${roomURL}`)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  )

}

//soumya's work
receptionistLogin(receptionistId: number, receptionistPassword: String): Observable<Receptionist>{
  return this.httpClient.get<Receptionist>(`${receptionUrl}/searchByReceptionistIdAndReceptionistPassword/${receptionistId}/${receptionistPassword}`)
  .pipe(
    retry(0),
    catchError(this.errorHandler)
  )
 }

 getReceptionistById(receptionistId: number): Observable<Receptionist>{
   return this.httpClient.get<Receptionist>(`${receptionUrl}/searchByReceptionistId/${receptionistId}`)
   .pipe(
     retry(0),
     catchError(this.errorHandler)
   )
 }
 getReceptionistByEmailId(receptionistEmail: String): Observable<Receptionist>{
   return this.httpClient.get<Receptionist>(`${receptionUrl}/forgetpassword/${receptionistEmail}`)
   .pipe(
    retry(0),
    catchError(this.errorHandler)
  )
 }

 updateReceptionist(receptionist: Receptionist): Observable<Receptionist> {
   return this.httpClient.put<Receptionist>(receptionUrl, receptionist, this.httpOptions)
     .pipe(
       retry(0),
       catchError(this.errorHandler)
     )
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
    case 200:    console.log("200's");

      break;
    case 401:
      break;
    case 403:
      break;
    case 0:
    case 400:
    case 405:
    case 406:
    case 409:
    case 500:
      break;
  }

  console.log(errorMessage);
  return throwError(error.status);
}
}

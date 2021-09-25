import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { Receptionist } from '../models/receptionist';

const URL = "http://localhost:9090/adminController"
@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  // Http Headers
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

constructor(public http:HttpClient) { }
getAllReceptionists() : Observable<Receptionist[]>{
  return this.http.get<Receptionist[]>(`http://localhost:9090/adminController/getAll`).pipe(retry(0),
  catchError(this.errorHandler)
  );
}
updateReceptionist(receptionist: Receptionist): Observable<Receptionist> {
  return this.http.put<Receptionist>(URL, receptionist)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
}
// updateRoom(room: Room): Observable<Room> {
//   return this.http.put<Room>(URL, room)
//     .pipe(
//       retry(0),
//       catchError(this.errorHandler)
//     )
// }

getReceptionistById(receptionistId:any) : Observable<Receptionist>{
   return this.http.get<Receptionist>(`${URL}/${receptionistId}`)
}

getReceptionistByPhoneNumber(receptionistPhoneNumber:any) : Observable<Receptionist>{
  return this.http.get<Receptionist>(`${URL}/phnno/${receptionistPhoneNumber}`)
}
getReceptionistByEmail(receptionistEmail:any) : Observable<Receptionist>{
  return this.http.get<Receptionist>(`${URL}/email/${receptionistEmail}`)
}

deleteReceptionistId(receptionistId:number) : Observable<Receptionist>{
  return this.http.delete<Receptionist>(`${URL}/${receptionistId}`)
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
  return throwError(errorMessage);
}
}

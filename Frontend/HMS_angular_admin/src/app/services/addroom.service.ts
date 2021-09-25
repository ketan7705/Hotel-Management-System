import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from '../models/room';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


const URL = "http://localhost:9090/room"
@Injectable({
  providedIn: 'root'
})
export class AddroomService {

  constructor(public http:HttpClient) { }
// Http Headers
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
   

  //get room by id
  getRoomById(roomId: number): Observable<Room> {
    return this.http.get(`${URL}/${roomId}`)
      
  }
  
  //delete a room
  deleteRoom(roomId: number): Observable<Room> {
    return this.http.delete(`${URL}/${roomId}`)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }
  
//save room
  addRoom(room :Room) :Observable<Room>{
    return this.http.post<Room>(URL,room,this.httpOptions).pipe(retry(0),
    catchError(this.errorHandler)
  );
  }
  //update a room
  updateRoom(room: Room): Observable<Room> {
    return this.http.put<Room>(URL, room)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  //get all rooms
  getAllRooms() :Observable<Room[]>{
    return this.http.get<Room[]>(`http://localhost:9090/room`).pipe(retry(0),
    catchError(this.errorHandler)
);
  }

//Error Handler
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




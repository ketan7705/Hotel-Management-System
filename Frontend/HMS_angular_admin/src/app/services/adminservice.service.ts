import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Admin } from '../models/admin';
import { Receptionist } from '../models/receptionist';



const adminUrl = "http://localhost:9090/adminController"

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(public httpClient : HttpClient) { }

  addReceptionist(receptionist: Receptionist): Observable<Receptionist> {
    return this.httpClient.post<Receptionist>(`${adminUrl}/addReceptionist`, receptionist, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  updateReceptionist(receptionist: Receptionist): Observable<Receptionist> {
    return this.httpClient.put<Receptionist>(adminUrl, receptionist, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  
  adminLogin(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(`${adminUrl}/adminLogin`, admin, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }
  getAllReceptionists() : Observable<Receptionist[]>{
    return this.httpClient.get<Receptionist[]>(`http://localhost:9090/adminController/getAll`).pipe(retry(0),
    catchError(this.errorHandler)
    );
  }
  
  
  getReceptionistById(receptionistId:number) : Observable<Receptionist>{
     return this.httpClient.get<Receptionist>(`${URL}/${receptionistId}`)
  }
  
  deleteReceptionistId(receptionistId:number) : Observable<Receptionist>{
    return this.httpClient.delete<Receptionist>(`${URL}/${receptionistId}`)
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


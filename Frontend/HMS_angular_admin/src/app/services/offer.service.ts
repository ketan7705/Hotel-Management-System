import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Offer } from '../models/offer';

const offerUrl="http://localhost:9090/hoteloffer"
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(public http:HttpClient) { }

    // Http Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  
    //to get all the offers
    //http://localhost:9003/hoteloffer
    getOffers():Observable<Offer[]>
    {
        return this.http.get<Offer[]>(offerUrl)
        .pipe(
         retry(1),
         catchError(this.errorHandler)
        )
    }
    
    //to delete a Offer
     //http://localhost:9003/hoteloffer
     deleteOffer(offerId:number)
     {
       return this.http.delete(`${offerUrl}/${offerId}`)
       .pipe
       (
         retry(1),
         catchError(this.errorHandler)
       )
     }

     //save Offer
    addOffer(offer :Offer) :Observable<Offer>{
      return this.http.post<Offer>(offerUrl,offer,this.httpOptions).pipe(retry(0),
      catchError(this.errorHandler)
    );
    }

    //update offers
    updateOffer(offer :Offer): Observable<Offer> {
      return this.http.put<Offer>(offerUrl, offer)
        .pipe(
          retry(0),
          catchError(this.errorHandler)
        )
    }

    //get offer by id
  getOfferById(offerId: number): Observable<Offer> {
    return this.http.get(`${offerUrl}/${offerId}`)
      
  }
  //localhost:9090/hoteloffer/getOfferByRoomType/Dulex
  //get by room type
  getOfferByRoomType(roomType: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${offerUrl}/getOfferByRoomType/${roomType}`)
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

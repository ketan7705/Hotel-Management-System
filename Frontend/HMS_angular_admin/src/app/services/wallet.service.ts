import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wallet } from '../models/wallet.class';
import { Observable, throwError } from 'rxjs';
import { retry ,catchError } from 'rxjs/operators';


const walletUrl= "http://localhost:9090/Reception";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  wallet:Observable<Wallet>;  
  customerUserName:String;

  constructor(public http:HttpClient) { }

  


  getMyWallet(customerUserName:String) :Observable<Wallet>{
    return this.http.get<Wallet>(`${walletUrl}/${customerUserName}/getBalance`,this.httpOptions)
    .pipe(
      retry (1),
      catchError (this.errorHandler)
    );
  }
  
  addWallet(customerUserName:String,walletAmount:number):Observable<Wallet>{   
    return this.http.post<Wallet>(`${walletUrl}/save/${customerUserName}/${walletAmount}`,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
}
  
  updateMoneyToWallet(customerUserName:String,walletAmount:number):Observable<Wallet>{   
      return this.http.put<Wallet>(`${walletUrl}/updateWallet/${customerUserName}/${walletAmount}`,this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }     
  errorHandler(error: { error: { message: String; }; status: any; message: any; }){
    let errorMessage='';
    if(error.error instanceof ErrorEvent ) {
       errorMessage=error.error.message;
    }else{
        errorMessage=`Error Code:${error.status}\nMessage:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage)
    }
}

// @PostMapping("/add/{customerUserName}/{walletAmount}")
// 	public ResponseEntity<String> addCustomer(@PathVariable String customerUserName,
// 			@PathVariable int walletAmount) {
// 		ResponseEntity<String> responseEntity = null;
// 		Wallet wallet = new Wallet(customerUserName,walletAmount);
// 		String message = null;
// 		if (walletService.addCustomer(wallet)) {
// 			message = "User Saved Successfully";
// 			logger.info(message);
// 			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
// 		} else {

// 			message = "Something Went Wromg";
// 			responseEntity = new ResponseEntity<String>(message, HttpStatus.NOT_FOUND);

// 		}
// 		return responseEntity;
// 	}

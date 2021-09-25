import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/models/wallet.class';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(public router:Router,public walletService:WalletService, public activatedRoute:ActivatedRoute) { }
 
   
  customerUserName:string;
  totalAmount?:Wallet;
  userName?:string;

  ngOnInit():void{
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.customerUserName="Jayant";
    this.walletService.getMyWallet(this.userName)    
    .subscribe(
      data => {
        console.log(data);
        this.totalAmount=data;
        // console.log("#######Updated successfully ");
        // this.router.navigate(['doctor-login'])
      });
  
   
  }

  addwallet(){
    console.log("called wallet")
    this.router.navigate(["addMoneyToWallet", this.userName]);

  }
  home(){
    this.router.navigate(["customerDashboard", this.userName]);
  }

}

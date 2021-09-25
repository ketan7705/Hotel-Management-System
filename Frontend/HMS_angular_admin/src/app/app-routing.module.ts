import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/AdminComponents/about/about.component';
import { AddoffersComponent } from './components/AdminComponents/addoffers/addoffers.component';
import { AddreceptionistComponent } from './components/AdminComponents/addreceptionist/addreceptionist.component';
import { AddroomComponent } from './components/AdminComponents/addroom/addroom.component';
import { AdminLoginComponent } from './components/AdminComponents/admin-login/admin-login.component';
import { AdmindashboardComponent } from './components/AdminComponents/admindashboard/admindashboard.component';
import { AdminfunctionsComponent } from './components/AdminComponents/adminfunctions/adminfunctions.component';
import { BookingHistoryComponent } from './components/AdminComponents/booking-history/booking-history.component';
import { EditRoomComponent } from './components/AdminComponents/edit-room/edit-room.component';
import { FacilitiesComponent } from './components/AdminComponents/facilities/facilities.component';
import { FeedbackDetailsComponent } from './components/AdminComponents/feedback-details/feedback-details.component';
import { FeedbackFormComponent } from './components/AdminComponents/feedback-form/feedback-form.component';
import { OfferoperationsComponent } from './components/AdminComponents/offeroperations/offeroperations.component';
import { OffersComponent } from './components/AdminComponents/offers/offers.component';
import { ReceptionistComponent } from './components/AdminComponents/receptionist/receptionist.component';
import { SearchofferComponent } from './components/AdminComponents/searchoffer/searchoffer.component';
import { SearchroomComponent } from './components/AdminComponents/searchroom/searchroom.component';
import { UpdateOfferComponent } from './components/AdminComponents/update-offer/update-offer.component';
import { UpdatereceptionistComponent } from './components/AdminComponents/updatereceptionist/updatereceptionist.component';
import { ViewDetailsComponent } from './components/AdminComponents/view-details/view-details.component';
import { ViewallreceptionistComponent } from './components/AdminComponents/viewallreceptionist/viewallreceptionist.component';
import { ViewoffersComponent } from './components/AdminComponents/viewoffers/viewoffers.component';
import { ViewrecbyIdComponent } from './components/AdminComponents/viewrecby-id/viewrecby-id.component';
import { ViewroomsComponent } from './components/AdminComponents/viewrooms/viewrooms.component';
import { AddMoneyToWalletComponent } from './components/CustomerComponents/add-money-to-wallet/add-money-to-wallet.component';
import { CancelBookingComponent } from './components/CustomerComponents/cancel-booking/cancel-booking.component';
import { CancelPickupanddropComponent } from './components/CustomerComponents/cancel-pickupanddrop/cancel-pickupanddrop.component';
import { ConfirmBookingComponent } from './components/CustomerComponents/confirm-booking/confirm-booking.component';
import { ContactUsComponent } from './components/CustomerComponents/contact-us/contact-us.component';
import { CustomerAboutComponent } from './components/CustomerComponents/customer-about/customer-about.component';
import { CustomerBillingComponent } from './components/CustomerComponents/customer-billing/customer-billing.component';
import { CustomerBlogsComponent } from './components/CustomerComponents/customer-blogs/customer-blogs.component';
import { CustomerBookingFormComponent } from './components/CustomerComponents/customer-booking-form/customer-booking-form.component';
import { CustomerDashboardComponent } from './components/CustomerComponents/customer-dashboard/customer-dashboard.component';
import { CustomerNavbarComponent } from './components/CustomerComponents/customer-navbar/customer-navbar.component';
import { CustomerSignupComponent } from './components/CustomerComponents/customer-signup/customer-signup.component';
import { CustomerloginComponent } from './components/CustomerComponents/customerlogin/customerlogin.component';
import { EditBookingComponent } from './components/CustomerComponents/edit-booking/edit-booking.component';
import { EditCustomerComponent } from './components/CustomerComponents/edit-customer/edit-customer.component';
import { PickAndDropComponent } from './components/CustomerComponents/pick-and-drop/pick-and-drop.component';
import { CustomerRoomsComponent } from './components/CustomerComponents/rooms/rooms.component';
import { TermAndConditionComponent } from './components/CustomerComponents/term-and-condition/term-and-condition.component';
import { UpdatePasswordComponent } from './components/CustomerComponents/update-password/update-password.component';
import { UpdatePickupanddropComponent } from './components/CustomerComponents/update-pickupanddrop/update-pickupanddrop.component';
import { ViewBookingHistoryComponent } from './components/CustomerComponents/view-booking-history/view-booking-history.component';
import { WalletComponent } from './components/CustomerComponents/wallet/wallet.component';
import { MainComponent } from './components/HomeComponent/main/main.component';
import { AllocateRoomsComponent } from './components/ReceptionistComponents/allocate-rooms/allocate-rooms.component';
import { BookingsHistoryComponent } from './components/ReceptionistComponents/bookings-history/bookings-history.component';
import { BookingsComponent } from './components/ReceptionistComponents/bookings/bookings.component';
import { CancellationComponent } from './components/ReceptionistComponents/cancellation/cancellation.component';
import { HomeComponent } from './components/ReceptionistComponents/home/home.component';
import { ReceptionDashboardComponent } from './components/ReceptionistComponents/reception-dashboard/reception-dashboard.component';
import { ReceptionistForgetpasswordComponent } from './components/ReceptionistComponents/receptionist-forgetpassword/receptionist-forgetpassword.component';
import { ReceptionistLoginComponent } from './components/ReceptionistComponents/receptionist-login/receptionist-login.component';
import { ReceptionistProfileUpdateComponent } from './components/ReceptionistComponents/receptionist-profile-update/receptionist-profile-update.component';
import { ReceptionistProfileComponent } from './components/ReceptionistComponents/receptionist-profile/receptionist-profile.component';
import { UnBookedListComponent } from './components/ReceptionistComponents/un-booked-list/un-booked-list.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  { path: 'adminFunc', component:AdminfunctionsComponent },
  { path: 'addRoom', component:AddroomComponent },
  
  { path: 'editRoom/:roomId', component:EditRoomComponent },
  { path: 'viewrooms', component:ViewroomsComponent },
  { path: 'searchroom', component:SearchroomComponent },

  {path:'showoffers',component:ViewoffersComponent},
  {path:'addoffers',component:AddoffersComponent},
  {path:'searchoffer',component:OfferoperationsComponent},
  {path:'offer',component:OffersComponent},
  {path:'offeroperations',component:OfferoperationsComponent},
  {path:'searchofferbyid',component:SearchofferComponent},
  {path:'updateAOffer/:offerId',component:UpdateOfferComponent},

  {path:'receptionist' , component:ReceptionistComponent },
  {path:'addrec' , component:AddreceptionistComponent },
  {path:'editrec/:receptionistId' , component:UpdatereceptionistComponent },
  {path:'viewall' , component:ViewallreceptionistComponent },
  {path:'viewid' , component:ViewrecbyIdComponent },
  {path:'bookingDetails', component:BookingHistoryComponent},
  {path:'viewDetails/:bookingId', component:ViewDetailsComponent},
  { path: 'view', component: FeedbackDetailsComponent},
  { path: 'form', component: FeedbackFormComponent},
  {path : 'about',component:AboutComponent},
  {path : 'facilities',component:FacilitiesComponent},

//Receptionist Routing

  {path:"aboutus" , component:AboutComponent},
  {path:"receptionist-home", component:HomeComponent},
  {path:"bookingsPage", component:BookingsComponent},
  {path:"cancellationPage", component:CancellationComponent},
  {path:"bookingsHistory", component:BookingsHistoryComponent},
  {path:'allocateRooms',component:AllocateRoomsComponent},
  {path:'unBooked',component:UnBookedListComponent},
  {path:'receptionistprofile/:receptionistId', component: ReceptionistProfileComponent},
  {path:'receptionistlogin', component: ReceptionistLoginComponent},
  {path:'receptionDashboard', component:ReceptionDashboardComponent},
  {path: 'receptionistprofileupdate/:receptionistId', component: ReceptionistProfileUpdateComponent},
  {path:'receptionDashboard/:receptionistId', component: ReceptionDashboardComponent},
  {path: 'receptionistforgetPassword', component:ReceptionistForgetpasswordComponent},

//Customer Routing
  { path:"customerDashboard/:userName", component:CustomerDashboardComponent},
  { path:"about/:userName",component: CustomerAboutComponent},
  { path:"blogs",component: CustomerBlogsComponent },
  { path:"termAndCondition",component: TermAndConditionComponent },
  { path:"cancelBooking/:userName",component: CancelBookingComponent },
  { path:"editBooking/:userName",component: EditBookingComponent },
  { path:"billing/:userName",component: CustomerBillingComponent },
  { path:"customerBooking/:userName",component: CustomerBookingFormComponent },
  { path:"customerSignUp/:userName",component: CustomerSignupComponent },
  { path:"customerLogin/:userName",component: CustomerloginComponent },


  { path:"editCustomer/:userName",component: EditCustomerComponent },
  { path:"updatePickAndDrop/:userName",component: UpdatePickupanddropComponent },
  { path:"addPickAndDrop/:userName/:Id",component: PickAndDropComponent },
  { path:"cancelPickAndDrop/:userName",component: CancelPickupanddropComponent },

  { path:"contactUs/:userName",component: ContactUsComponent },
  { path:"rooms/:userName",component: CustomerRoomsComponent },

  { path:"navbar/:userName",component: CustomerNavbarComponent },
  { path:"updatePassword/:userName",component: UpdatePasswordComponent },
  { path:"viewBookingHistory/:userName",component: ViewBookingHistoryComponent },
  { path:"confirmBooking/:userName/:Id",component: ConfirmBookingComponent },
  { path:"addMoneyToWallet/:userName",component: AddMoneyToWalletComponent },
  { path:"wallet/:userName",component: WalletComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

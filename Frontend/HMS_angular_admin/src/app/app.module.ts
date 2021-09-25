import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NavbarComponent } from './components/AdminComponents/navbar/navbar.component';
import { ReceptionistNavbarComponent } from './components/AdminComponents/receptionist-navbar/receptionist-navbar.component';
import { AdminnavbarComponent } from './components/AdminComponents/adminnavbar/adminnavbar.component';
import { RoomNavbarComponent } from './components/AdminComponents/roomnavbar/roomnavbar.component';
import { OfferNavbarComponent } from './components/AdminComponents/offernavbar/offernavbar.component';
import { HomeComponent } from './components/ReceptionistComponents/home/home.component';
import { BlogsComponent } from './components/ReceptionistComponents/blogs/blogs.component';
import { ElementsComponent } from './components/ReceptionistComponents/elements/elements.component';
import { ConactComponent } from './components/ReceptionistComponents/conact/conact.component';
import { BookingsComponent } from './components/ReceptionistComponents/bookings/bookings.component';
import { CancellationComponent } from './components/ReceptionistComponents/cancellation/cancellation.component';
import { BookingsHistoryComponent } from './components/ReceptionistComponents/bookings-history/bookings-history.component';
import { AllocateRoomsComponent } from './components/ReceptionistComponents/allocate-rooms/allocate-rooms.component';
import { UnBookedListComponent } from './components/ReceptionistComponents/un-booked-list/un-booked-list.component';
import { ReceptionistProfileComponent } from './components/ReceptionistComponents/receptionist-profile/receptionist-profile.component';
import { ReceptionistLoginComponent } from './components/ReceptionistComponents/receptionist-login/receptionist-login.component';
import { ReceptionistOperationsComponent } from './components/ReceptionistComponents/receptionist-operations/receptionist-operations.component';
import { ReceptionistProfileUpdateComponent } from './components/ReceptionistComponents/receptionist-profile-update/receptionist-profile-update.component';
import { ReceptionistForgetpasswordComponent } from './components/ReceptionistComponents/receptionist-forgetpassword/receptionist-forgetpassword.component';
import { ReceptionDashboardComponent } from './components/ReceptionistComponents/reception-dashboard/reception-dashboard.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReceptionistFooterComponent } from './components/ReceptionistComponents/footer/footer.component';
import { ReceptionistAboutComponent } from './components/ReceptionistComponents/about/about.component';
import { NavbarComponentReceptionist } from './components/ReceptionistComponents/navbar/navbar.component';
import { FooterComponent } from './components/AdminComponents/footer/footer.component';
import { DatePipe } from '@angular/common';
import { HomenavbarComponent } from './components/HomeComponent/homenavbar/homenavbar.component';
import { MainComponent } from './components/HomeComponent/main/main.component';
import { CustomerDashboardComponent } from './components/CustomerComponents/customer-dashboard/customer-dashboard.component';
import { CustomerFooterComponent } from './components/CustomerComponents/customer-footer/customer-footer.component';
import { CustomerNavbarComponent } from './components/CustomerComponents/customer-navbar/customer-navbar.component';
import { CustomerBlogsComponent } from './components/CustomerComponents/customer-blogs/customer-blogs.component';
import { CustomerAboutComponent } from './components/CustomerComponents/customer-about/customer-about.component';
import { EditCustomerComponent } from './components/CustomerComponents/edit-customer/edit-customer.component';
import { UpdatePasswordComponent } from './components/CustomerComponents/update-password/update-password.component';
import { EditBookingComponent } from './components/CustomerComponents/edit-booking/edit-booking.component';
import { PickAndDropComponent } from './components/CustomerComponents/pick-and-drop/pick-and-drop.component';
import { CustomerloginComponent } from './components/CustomerComponents/customerlogin/customerlogin.component';
import { ViewBookingHistoryComponent } from './components/CustomerComponents/view-booking-history/view-booking-history.component';
import { CustomerSignupComponent } from './components/CustomerComponents/customer-signup/customer-signup.component';
import { CustomerBookingFormComponent } from './components/CustomerComponents/customer-booking-form/customer-booking-form.component';
import { CancelBookingComponent } from './components/CustomerComponents/cancel-booking/cancel-booking.component';
import { CancelPickupanddropComponent } from './components/CustomerComponents/cancel-pickupanddrop/cancel-pickupanddrop.component';
import { UpdatePickupanddropComponent } from './components/CustomerComponents/update-pickupanddrop/update-pickupanddrop.component';
import { CustomerBillingComponent } from './components/CustomerComponents/customer-billing/customer-billing.component';
import { ContactUsComponent } from './components/CustomerComponents/contact-us/contact-us.component';
import { TermAndConditionComponent } from './components/CustomerComponents/term-and-condition/term-and-condition.component';
import { ConfirmBookingComponent } from './components/CustomerComponents/confirm-booking/confirm-booking.component';
import { WalletComponent } from './components/CustomerComponents/wallet/wallet.component';
import { AddMoneyToWalletComponent } from './components/CustomerComponents/add-money-to-wallet/add-money-to-wallet.component';
import { CustomerRoomsComponent } from './components/CustomerComponents/rooms/rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    AddreceptionistComponent,
    AdminLoginComponent,
    AdmindashboardComponent,ReceptionistNavbarComponent,
    AdminnavbarComponent,AddroomComponent,AdminfunctionsComponent,
    EditRoomComponent,RoomNavbarComponent,SearchroomComponent,ViewroomsComponent,
    AddoffersComponent,OfferNavbarComponent,OfferoperationsComponent,
    OffersComponent,SearchofferComponent,ViewoffersComponent,UpdateOfferComponent,ReceptionistComponent,UpdatereceptionistComponent,ViewallreceptionistComponent,ViewrecbyIdComponent,
    BookingHistoryComponent,ViewDetailsComponent,
    FeedbackDetailsComponent,
    FeedbackFormComponent,
    AboutComponent,
    FacilitiesComponent,
    ReceptionistNavbarComponent,

    HomeComponent,
    ReceptionistFooterComponent,
    NavbarComponentReceptionist,
    BlogsComponent,
    ElementsComponent,
    ConactComponent,
    ReceptionistAboutComponent,
    BookingsComponent,
    CancellationComponent,
    BookingsHistoryComponent,
    AllocateRoomsComponent,
    UnBookedListComponent,
    ReceptionistProfileComponent,
    ReceptionistLoginComponent,
    ReceptionistOperationsComponent,
    ReceptionistProfileUpdateComponent,
    ReceptionistForgetpasswordComponent,
    ReceptionDashboardComponent,
    HomenavbarComponent,


    CustomerDashboardComponent,
    CustomerFooterComponent,
    CustomerNavbarComponent,
    CustomerRoomsComponent,
    CustomerBlogsComponent,
    CustomerAboutComponent,
    EditCustomerComponent,
    UpdatePasswordComponent,
    EditBookingComponent,
    PickAndDropComponent,
    CustomerloginComponent,
    ViewBookingHistoryComponent,
    CustomerSignupComponent,
    CustomerBookingFormComponent,
    CancelBookingComponent,
    CancelPickupanddropComponent,
    UpdatePickupanddropComponent,
    CustomerBillingComponent,
    ContactUsComponent,
    TermAndConditionComponent,
    ConfirmBookingComponent,
    WalletComponent,
    AddMoneyToWalletComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

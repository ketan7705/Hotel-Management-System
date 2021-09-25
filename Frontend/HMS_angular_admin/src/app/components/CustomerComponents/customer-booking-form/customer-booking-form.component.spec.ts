import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookingFormComponent } from './customer-booking-form.component';

describe('CustomerBookingFormComponent', () => {
  let component: CustomerBookingFormComponent;
  let fixture: ComponentFixture<CustomerBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBookingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

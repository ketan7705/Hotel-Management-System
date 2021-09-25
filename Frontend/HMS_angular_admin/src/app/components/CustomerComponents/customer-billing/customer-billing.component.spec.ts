import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillingComponent } from './customer-billing.component';

describe('CustomerBillingComponent', () => {
  let component: CustomerBillingComponent;
  let fixture: ComponentFixture<CustomerBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

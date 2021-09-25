import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAboutComponent } from './customer-about.component';

describe('CustomerAboutComponent', () => {
  let component: CustomerAboutComponent;
  let fixture: ComponentFixture<CustomerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

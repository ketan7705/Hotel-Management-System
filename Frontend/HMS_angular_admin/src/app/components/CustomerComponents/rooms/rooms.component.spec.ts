import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRoomsComponent } from './rooms.component';

describe('RoomsComponent', () => {
  let component: CustomerRoomsComponent;
  let fixture: ComponentFixture<CustomerRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

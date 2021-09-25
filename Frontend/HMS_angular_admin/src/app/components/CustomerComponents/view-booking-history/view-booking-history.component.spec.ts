import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingHistoryComponent } from './view-booking-history.component';

describe('ViewBookingHistoryComponent', () => {
  let component: ViewBookingHistoryComponent;
  let fixture: ComponentFixture<ViewBookingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

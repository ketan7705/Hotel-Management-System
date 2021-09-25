import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsHistoryComponent } from './bookings-history.component';

describe('BookingsHistoryComponent', () => {
  let component: BookingsHistoryComponent;
  let fixture: ComponentFixture<BookingsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

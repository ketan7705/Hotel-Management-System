import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnBookedListComponent } from './un-booked-list.component';

describe('UnBookedListComponent', () => {
  let component: UnBookedListComponent;
  let fixture: ComponentFixture<UnBookedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnBookedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnBookedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

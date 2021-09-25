import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPickupanddropComponent } from './cancel-pickupanddrop.component';

describe('CancelPickupanddropComponent', () => {
  let component: CancelPickupanddropComponent;
  let fixture: ComponentFixture<CancelPickupanddropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPickupanddropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPickupanddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

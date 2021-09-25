import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePickupanddropComponent } from './update-pickupanddrop.component';

describe('UpdatePickupanddropComponent', () => {
  let component: UpdatePickupanddropComponent;
  let fixture: ComponentFixture<UpdatePickupanddropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePickupanddropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePickupanddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

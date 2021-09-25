import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistForgetpasswordComponent } from './receptionist-forgetpassword.component';

describe('ReceptionistForgetpasswordComponent', () => {
  let component: ReceptionistForgetpasswordComponent;
  let fixture: ComponentFixture<ReceptionistForgetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistForgetpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

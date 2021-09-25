import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistProfileUpdateComponent } from './receptionist-profile-update.component';

describe('ReceptionistProfileUpdateComponent', () => {
  let component: ReceptionistProfileUpdateComponent;
  let fixture: ComponentFixture<ReceptionistProfileUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistProfileUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

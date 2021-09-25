import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistNavbarComponent } from './receptionist-navbar.component';

describe('NavbarComponent', () => {
  let component: ReceptionistNavbarComponent;
  let fixture: ComponentFixture<ReceptionistNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

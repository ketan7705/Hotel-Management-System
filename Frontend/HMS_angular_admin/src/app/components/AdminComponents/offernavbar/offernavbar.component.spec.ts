import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferNavbarComponent } from './offernavbar.component';

describe('NavbarComponent', () => {
  let component: OfferNavbarComponent;
  let fixture: ComponentFixture<OfferNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferoperationsComponent } from './offeroperations.component';

describe('OfferoperationsComponent', () => {
  let component: OfferoperationsComponent;
  let fixture: ComponentFixture<OfferoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferoperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

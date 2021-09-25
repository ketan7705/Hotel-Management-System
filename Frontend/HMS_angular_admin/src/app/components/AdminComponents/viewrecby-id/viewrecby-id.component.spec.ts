import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecbyIdComponent } from './viewrecby-id.component';

describe('ViewrecbyIdComponent', () => {
  let component: ViewrecbyIdComponent;
  let fixture: ComponentFixture<ViewrecbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrecbyIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrecbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

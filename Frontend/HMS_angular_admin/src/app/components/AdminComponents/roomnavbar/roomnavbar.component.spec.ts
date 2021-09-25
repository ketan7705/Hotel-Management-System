import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomNavbarComponent } from './roomnavbar.component';

describe('NavbarComponent', () => {
  let component: RoomNavbarComponent;
  let fixture: ComponentFixture<RoomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

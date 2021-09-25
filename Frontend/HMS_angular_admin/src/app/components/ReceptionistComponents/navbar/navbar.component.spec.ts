import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentReceptionist } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponentReceptionist;
  let fixture: ComponentFixture<NavbarComponentReceptionist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponentReceptionist ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponentReceptionist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

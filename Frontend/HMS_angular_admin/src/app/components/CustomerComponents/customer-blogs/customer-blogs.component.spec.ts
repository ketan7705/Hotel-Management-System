import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBlogsComponent } from './customer-blogs.component';

describe('CustomerBlogsComponent', () => {
  let component: CustomerBlogsComponent;
  let fixture: ComponentFixture<CustomerBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

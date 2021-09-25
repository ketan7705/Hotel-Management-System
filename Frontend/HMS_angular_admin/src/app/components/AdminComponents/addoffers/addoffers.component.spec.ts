import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoffersComponent } from './addoffers.component';

describe('AddoffersComponent', () => {
  let component: AddoffersComponent;
  let fixture: ComponentFixture<AddoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

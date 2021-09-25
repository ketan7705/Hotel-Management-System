import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreceptionistComponent } from './addreceptionist.component';

describe('AddreceptionistComponent', () => {
  let component: AddreceptionistComponent;
  let fixture: ComponentFixture<AddreceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreceptionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

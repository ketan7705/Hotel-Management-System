import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfunctionsComponent } from './adminfunctions.component';

describe('AdminfunctionsComponent', () => {
  let component: AdminfunctionsComponent;
  let fixture: ComponentFixture<AdminfunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

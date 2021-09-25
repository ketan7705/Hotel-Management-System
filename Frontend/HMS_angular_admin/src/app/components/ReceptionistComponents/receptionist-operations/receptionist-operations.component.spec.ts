import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistOperationsComponent } from './receptionist-operations.component';

describe('ReceptionistOperationsComponent', () => {
  let component: ReceptionistOperationsComponent;
  let fixture: ComponentFixture<ReceptionistOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

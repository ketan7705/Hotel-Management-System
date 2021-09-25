import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistAboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: ReceptionistAboutComponent;
  let fixture: ComponentFixture<ReceptionistAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

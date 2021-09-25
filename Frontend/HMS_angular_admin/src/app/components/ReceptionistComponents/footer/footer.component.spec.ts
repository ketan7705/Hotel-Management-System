import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: ReceptionistFooterComponent;
  let fixture: ComponentFixture<ReceptionistFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
